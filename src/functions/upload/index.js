const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { v4: uuidv4 } = require('uuid');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3Client = new S3Client({});
const dynamoClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoClient);

const BUCKET_NAME = process.env.IMAGE_BUCKET;
const TABLE_NAME = process.env.DYNAMODB_TABLE;

/**
 * CORS headers helper function
 */
function corsHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Api-Key'
  };
}

/**
 * Lambda handler for image upload
 * Generates pre-signed URL for direct S3 upload
 */
exports.handler = async (event) => {
  console.log('Upload function invoked:', JSON.stringify(event));

  try {
    // Parse request body
    const body = JSON.parse(event.body || '{}');
    const {
      fileName, fileType, userId = 'anonymous', metadata = {}
    } = body;

    // Validation
    if (!fileName || !fileType) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({
          success: false,
          error: 'fileName and fileType are required'
        })
      };
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(fileType)) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({
          success: false,
          error: 'Invalid file type. Allowed: JPEG, PNG, WebP, GIF'
        })
      };
    }

    const imageId = uuidv4();
    const timestamp = Date.now();
    const s3Key = `uploads/${userId}/${timestamp}-${fileName}`;

    // Generate pre-signed URL for upload
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: s3Key,
      ContentType: fileType,
      Metadata: {
        userId,
        imageId,
        originalName: fileName
      }
    });

    const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    // Store metadata in DynamoDB
    const item = {
      userId,
      imageId,
      fileName,
      fileType,
      s3Key,
      status: 'pending',
      metadata,
      createdAt: timestamp,
      updatedAt: timestamp,
      ttl: Math.floor(Date.now() / 1000) + (90 * 24 * 60 * 60) // 90 days TTL
    };

    await docClient.send(new PutCommand({
      TableName: TABLE_NAME,
      Item: item
    }));

    console.log('Image metadata stored:', imageId);

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        success: true,
        data: {
          imageId,
          uploadUrl,
          s3Key,
          expiresIn: 3600,
          message: 'Use the uploadUrl to PUT your image file'
        }
      })
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({
        success: false,
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};

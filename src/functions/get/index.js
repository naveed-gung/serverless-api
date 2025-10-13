const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand } = require('@aws-sdk/lib-dynamodb');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3Client = new S3Client({});
const dynamoClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoClient);

const BUCKET_NAME = process.env.IMAGE_BUCKET;
const TABLE_NAME = process.env.DYNAMODB_TABLE;

/**
 * Lambda handler to get image details and signed URL
 */
exports.handler = async (event) => {
  console.log('Get image function invoked:', JSON.stringify(event));

  try {
    // Get parameters
    const imageId = event.pathParameters?.id;
    const userId = event.queryStringParameters?.userId || 'anonymous';

    if (!imageId) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({
          success: false,
          error: 'Image ID is required'
        })
      };
    }

    // Get image metadata from DynamoDB
    const result = await docClient.send(new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        userId,
        imageId
      }
    }));

    if (!result.Item) {
      return {
        statusCode: 404,
        headers: corsHeaders(),
        body: JSON.stringify({
          success: false,
          error: 'Image not found'
        })
      };
    }

    const image = result.Item;

    // Generate signed URL for download
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: image.s3Key
    });

    const downloadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    // Generate URLs for processed versions if they exist
    const urls = {
      original: downloadUrl
    };

    if (image.processedVersions) {
      for (const [version, key] of Object.entries(image.processedVersions)) {
        const versionCommand = new GetObjectCommand({
          Bucket: BUCKET_NAME,
          Key: key
        });
        urls[version] = await getSignedUrl(s3Client, versionCommand, { expiresIn: 3600 });
      }
    }

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        success: true,
        data: {
          image: {
            ...image,
            urls
          }
        }
      })
    };

  } catch (error) {
    console.error('Get image error:', error);
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

function corsHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Api-Key'
  };
}

const { S3Client, DeleteObjectCommand, DeleteObjectsCommand } = require('@aws-sdk/client-s3');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');

const s3Client = new S3Client({});
const dynamoClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoClient);

const BUCKET_NAME = process.env.IMAGE_BUCKET;
const TABLE_NAME = process.env.DYNAMODB_TABLE;

/**
 * Lambda handler to delete an image
 */
exports.handler = async (event) => {
  console.log('Delete image function invoked:', JSON.stringify(event));

  try {
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

    // Get image metadata
    const getResult = await docClient.send(new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        userId,
        imageId
      }
    }));

    if (!getResult.Item) {
      return {
        statusCode: 404,
        headers: corsHeaders(),
        body: JSON.stringify({
          success: false,
          error: 'Image not found'
        })
      };
    }

    const image = getResult.Item;

    // Delete from S3 (original and all processed versions)
    const s3Keys = [image.s3Key];
    
    if (image.processedVersions) {
      s3Keys.push(...Object.values(image.processedVersions));
    }

    // Delete multiple objects from S3
    if (s3Keys.length > 1) {
      await s3Client.send(new DeleteObjectsCommand({
        Bucket: BUCKET_NAME,
        Delete: {
          Objects: s3Keys.map(key => ({ Key: key }))
        }
      }));
    } else {
      await s3Client.send(new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: image.s3Key
      }));
    }

    // Delete from DynamoDB
    await docClient.send(new DeleteCommand({
      TableName: TABLE_NAME,
      Key: {
        userId,
        imageId
      }
    }));

    console.log('Image deleted successfully:', imageId);

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        success: true,
        message: 'Image deleted successfully',
        data: {
          imageId,
          deletedFiles: s3Keys.length
        }
      })
    };

  } catch (error) {
    console.error('Delete image error:', error);
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

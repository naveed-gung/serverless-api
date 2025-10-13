const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand } = require('@aws-sdk/lib-dynamodb');

const dynamoClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoClient);

const TABLE_NAME = process.env.DYNAMODB_TABLE;

/**
 * Lambda handler to get job/processing status
 */
exports.handler = async (event) => {
  console.log('Get status function invoked:', JSON.stringify(event));

  try {
    const jobId = event.pathParameters?.jobId;
    const userId = event.queryStringParameters?.userId || 'anonymous';

    if (!jobId) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({
          success: false,
          error: 'Job ID is required'
        })
      };
    }

    // Get job status from DynamoDB
    const result = await docClient.send(new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        userId,
        imageId: jobId
      }
    }));

    if (!result.Item) {
      return {
        statusCode: 404,
        headers: corsHeaders(),
        body: JSON.stringify({
          success: false,
          error: 'Job not found'
        })
      };
    }

    const job = result.Item;

    // Calculate processing time if completed
    let processingTime = null;
    if (job.status === 'completed' || job.status === 'failed') {
      processingTime = job.updatedAt - job.createdAt;
    }

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        success: true,
        data: {
          jobId: job.imageId,
          status: job.status,
          progress: getProgress(job.status),
          createdAt: job.createdAt,
          updatedAt: job.updatedAt,
          processingTime,
          error: job.errorMessage,
          metadata: {
            fileName: job.fileName,
            fileType: job.fileType,
            dimensions: job.dimensions,
            size: job.size
          },
          analysis: job.analysis,
          availableVersions: job.processedVersions ? Object.keys(job.processedVersions) : []
        }
      })
    };

  } catch (error) {
    console.error('Get status error:', error);
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

function getProgress(status) {
  const progressMap = {
    'pending': 0,
    'processing': 50,
    'completed': 100,
    'failed': -1
  };
  return progressMap[status] || 0;
}

function corsHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Api-Key'
  };
}

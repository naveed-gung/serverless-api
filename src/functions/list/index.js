const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, QueryCommand } = require('@aws-sdk/lib-dynamodb');

const dynamoClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoClient);

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
 * Lambda handler to list all images for a user
 */
exports.handler = async (event) => {
  console.log('List images function invoked:', JSON.stringify(event));

  try {
    // Get user ID from query parameters or default
    const userId = event.queryStringParameters?.userId || 'anonymous';
    const status = event.queryStringParameters?.status;
    const limit = parseInt(event.queryStringParameters?.limit || '20', 10);
    const lastKey = event.queryStringParameters?.lastKey;

    // Build query parameters
    const queryParams = {
      TableName: TABLE_NAME,
      KeyConditionExpression: 'userId = :userId',
      ExpressionAttributeValues: {
        ':userId': userId
      },
      Limit: limit,
      ScanIndexForward: false // Sort by newest first
    };

    // Add status filter if provided
    if (status) {
      queryParams.FilterExpression = 'status = :status';
      queryParams.ExpressionAttributeValues[':status'] = status;
    }

    // Add pagination
    if (lastKey) {
      queryParams.ExclusiveStartKey = JSON.parse(Buffer.from(lastKey, 'base64').toString());
    }

    // Query DynamoDB
    const result = await docClient.send(new QueryCommand(queryParams));

    // Prepare response
    const images = result.Items || [];
    const nextKey = result.LastEvaluatedKey
      ? Buffer.from(JSON.stringify(result.LastEvaluatedKey)).toString('base64')
      : null;

    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify({
        success: true,
        data: {
          images,
          count: images.length,
          nextKey
        }
      })
    };
  } catch (error) {
    console.error('List images error:', error);
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

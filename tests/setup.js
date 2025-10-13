// Test setup file
process.env.AWS_REGION = 'us-east-1';
process.env.IMAGE_BUCKET = 'test-bucket';
process.env.DYNAMODB_TABLE = 'test-table';
process.env.STAGE = 'test';

// Mock AWS SDK
jest.mock('@aws-sdk/client-s3');
jest.mock('@aws-sdk/client-dynamodb');
jest.mock('@aws-sdk/lib-dynamodb');
jest.mock('@aws-sdk/client-rekognition');
jest.mock('@aws-sdk/client-sqs');

// Global test setup
beforeAll(() => {
  console.log('Starting serverless tests...');
});

afterAll(() => {
  console.log('Serverless tests completed');
});

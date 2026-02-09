// Test setup file
process.env.AWS_REGION = 'us-east-1';
process.env.IMAGE_BUCKET = 'test-bucket';
process.env.DYNAMODB_TABLE = 'test-table';
process.env.STAGE = 'test';

// Mock AWS SDK - use factory functions so module-level client creation works
const mockDynamoSend = jest.fn().mockResolvedValue({});
const mockS3Send = jest.fn().mockResolvedValue({});
const mockSqsSend = jest.fn().mockResolvedValue({});
const mockRekognitionSend = jest.fn().mockResolvedValue({
  Labels: [],
  ModerationLabels: []
});

jest.mock('@aws-sdk/client-s3', () => ({
  S3Client: jest.fn().mockImplementation(() => ({ send: mockS3Send })),
  PutObjectCommand: jest.fn(),
  GetObjectCommand: jest.fn(),
  DeleteObjectCommand: jest.fn(),
  DeleteObjectsCommand: jest.fn()
}));

jest.mock('@aws-sdk/client-dynamodb', () => ({
  DynamoDBClient: jest.fn().mockImplementation(() => ({}))
}));

jest.mock('@aws-sdk/lib-dynamodb', () => ({
  DynamoDBDocumentClient: {
    from: jest.fn().mockReturnValue({ send: mockDynamoSend })
  },
  PutCommand: jest.fn(),
  GetCommand: jest.fn(),
  QueryCommand: jest.fn(),
  UpdateCommand: jest.fn(),
  DeleteCommand: jest.fn()
}));

jest.mock('@aws-sdk/client-rekognition', () => ({
  RekognitionClient: jest.fn().mockImplementation(() => ({ send: mockRekognitionSend })),
  DetectLabelsCommand: jest.fn(),
  DetectModerationLabelsCommand: jest.fn()
}));

jest.mock('@aws-sdk/client-sqs', () => ({
  SQSClient: jest.fn().mockImplementation(() => ({ send: mockSqsSend })),
  SendMessageCommand: jest.fn()
}));

jest.mock('@aws-sdk/s3-request-presigner', () => ({
  getSignedUrl: jest.fn().mockResolvedValue('https://s3.amazonaws.com/test-bucket/test-presigned-url')
}));

jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue('test-uuid-1234')
}));

// Export mocks for use in test files
global.__mocks__ = {
  mockDynamoSend,
  mockS3Send,
  mockSqsSend,
  mockRekognitionSend
};

// Global test setup
beforeAll(() => {
  console.log('Starting serverless tests...');
});

afterAll(() => {
  console.log('Serverless tests completed');
});

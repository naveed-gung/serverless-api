const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const handler = require('../../src/functions/upload/index');

const { mockDynamoSend } = global.__mocks__;

describe('Upload Function', () => {
  const validEvent = {
    body: JSON.stringify({
      fileName: 'test.jpg',
      fileType: 'image/jpeg',
      userId: 'test-user',
      metadata: { tags: ['test'] }
    })
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockDynamoSend.mockResolvedValue({});
    getSignedUrl.mockResolvedValue('https://s3.amazonaws.com/test-bucket/test-presigned-url');
  });

  it('should return 400 if fileName is missing', async () => {
    const event = {
      body: JSON.stringify({
        fileType: 'image/jpeg'
      })
    };

    const result = await handler.handler(event);
    expect(result.statusCode).toBe(400);

    const body = JSON.parse(result.body);
    expect(body.success).toBe(false);
    expect(body.error).toContain('required');
  });

  it('should return 400 if fileType is missing', async () => {
    const event = {
      body: JSON.stringify({
        fileName: 'test.jpg'
      })
    };

    const result = await handler.handler(event);
    expect(result.statusCode).toBe(400);

    const body = JSON.parse(result.body);
    expect(body.success).toBe(false);
    expect(body.error).toContain('required');
  });

  it('should return 400 for invalid file type', async () => {
    const event = {
      body: JSON.stringify({
        fileName: 'test.txt',
        fileType: 'text/plain'
      })
    };

    const result = await handler.handler(event);
    expect(result.statusCode).toBe(400);

    const body = JSON.parse(result.body);
    expect(body.success).toBe(false);
    expect(body.error).toContain('Invalid file type');
  });

  it('should validate request body structure', () => {
    const body = JSON.parse(validEvent.body);
    expect(body).toHaveProperty('fileName');
    expect(body).toHaveProperty('fileType');
    expect(body).toHaveProperty('userId');
  });

  it('should return 200 with upload URL on valid request', async () => {
    const result = await handler.handler(validEvent);
    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body.success).toBe(true);
    expect(body.data).toHaveProperty('imageId');
    expect(body.data).toHaveProperty('uploadUrl');
    expect(body.data).toHaveProperty('s3Key');
    expect(body.data.expiresIn).toBe(3600);
  });

  it('should have proper CORS headers on success', async () => {
    const result = await handler.handler(validEvent);
    expect(result.statusCode).toBe(200);
    expect(result.headers).toHaveProperty('Access-Control-Allow-Origin', '*');
    expect(result.headers).toHaveProperty('Content-Type', 'application/json');
    expect(result.headers).toHaveProperty('Access-Control-Allow-Methods');
  });

  it('should have proper CORS headers on error', async () => {
    const event = { body: JSON.stringify({}) };
    const result = await handler.handler(event);
    expect(result.statusCode).toBe(400);
    expect(result.headers).toHaveProperty('Access-Control-Allow-Origin', '*');
    expect(result.headers).toHaveProperty('Content-Type', 'application/json');
  });

  it('should call DynamoDB to store metadata', async () => {
    await handler.handler(validEvent);
    expect(mockDynamoSend).toHaveBeenCalled();
  });

  it('should generate pre-signed URL via S3', async () => {
    await handler.handler(validEvent);
    expect(getSignedUrl).toHaveBeenCalled();
  });

  it('should default userId to anonymous when not provided', async () => {
    const event = {
      body: JSON.stringify({
        fileName: 'test.jpg',
        fileType: 'image/jpeg'
      })
    };

    const result = await handler.handler(event);
    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body.data.s3Key).toContain('anonymous');
  });

  it('should return 500 on internal errors', async () => {
    getSignedUrl.mockRejectedValueOnce(new Error('S3 error'));

    const result = await handler.handler(validEvent);
    expect(result.statusCode).toBe(500);

    const body = JSON.parse(result.body);
    expect(body.success).toBe(false);
    expect(body.error).toBe('Internal server error');
  });
});

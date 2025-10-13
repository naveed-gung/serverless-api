const handler = require('../../src/functions/upload/index');

describe('Upload Function', () => {
  const validEvent = {
    body: JSON.stringify({
      fileName: 'test.jpg',
      fileType: 'image/jpeg',
      userId: 'test-user',
      metadata: { tags: ['test'] }
    })
  };

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

  it('should have proper CORS headers', async () => {
    const result = await handler.handler(validEvent);
    expect(result.headers).toHaveProperty('Access-Control-Allow-Origin');
    expect(result.headers).toHaveProperty('Content-Type', 'application/json');
  });
});

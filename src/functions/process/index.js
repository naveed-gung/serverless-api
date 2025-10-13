const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, UpdateCommand } = require('@aws-sdk/lib-dynamodb');
const { RekognitionClient, DetectLabelsCommand, DetectModerationLabelsCommand } = require('@aws-sdk/client-rekognition');
const sharp = require('sharp');

const s3Client = new S3Client({});
const dynamoClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoClient);
const rekognitionClient = new RekognitionClient({});

const BUCKET_NAME = process.env.IMAGE_BUCKET;
const TABLE_NAME = process.env.DYNAMODB_TABLE;

/**
 * Lambda handler for image processing
 * Handles thumbnail generation, format conversion, and AI analysis
 */
exports.handler = async (event) => {
  console.log('Process function invoked:', JSON.stringify(event));

  const results = {
    successful: [],
    failed: []
  };

  try {
    // Process each SQS message
    for (const record of event.Records) {
      const message = JSON.parse(record.body);
      const { imageId, userId, s3Key } = message;

      console.log('Processing image:', imageId);

      try {
        // Get image from S3
        const getCommand = new GetObjectCommand({
          Bucket: BUCKET_NAME,
          Key: s3Key
        });

        const { Body, ContentType } = await s3Client.send(getCommand);
        const imageBuffer = Buffer.from(await Body.transformToByteArray());

        // Get image metadata
        const metadata = await sharp(imageBuffer).metadata();
        console.log('Image metadata:', metadata);

        // Generate thumbnails
        const thumbnails = await generateThumbnails(imageBuffer, s3Key);

        // Convert to WebP format
        const webpKey = await convertToWebP(imageBuffer, s3Key);

        // Analyze image with Rekognition
        const analysis = await analyzeImage(s3Key);

        // Update DynamoDB with processing results
        await docClient.send(new UpdateCommand({
          TableName: TABLE_NAME,
          Key: {
            userId,
            imageId
          },
          UpdateExpression: 'SET #status = :status, processedVersions = :versions, analysis = :analysis, dimensions = :dimensions, #size = :size, updatedAt = :updatedAt',
          ExpressionAttributeNames: {
            '#status': 'status',
            '#size': 'size'
          },
          ExpressionAttributeValues: {
            ':status': 'completed',
            ':versions': {
              ...thumbnails,
              webp: webpKey
            },
            ':analysis': analysis,
            ':dimensions': {
              width: metadata.width,
              height: metadata.height
            },
            ':size': imageBuffer.length,
            ':updatedAt': Date.now()
          }
        }));

        console.log('Image processed successfully:', imageId);
        results.successful.push(imageId);

      } catch (error) {
        console.error('Error processing image:', imageId, error);
        
        // Update status to failed
        await docClient.send(new UpdateCommand({
          TableName: TABLE_NAME,
          Key: {
            userId,
            imageId
          },
          UpdateExpression: 'SET #status = :status, errorMessage = :error, updatedAt = :updatedAt',
          ExpressionAttributeNames: {
            '#status': 'status'
          },
          ExpressionAttributeValues: {
            ':status': 'failed',
            ':error': error.message,
            ':updatedAt': Date.now()
          }
        }));

        results.failed.push({ imageId, error: error.message });
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        processed: results.successful.length,
        failed: results.failed.length,
        results
      })
    };

  } catch (error) {
    console.error('Processing error:', error);
    throw error;
  }
};

/**
 * Generate multiple thumbnail sizes
 */
async function generateThumbnails(imageBuffer, originalKey) {
  const sizes = {
    thumbnail_small: 150,
    thumbnail_medium: 300,
    thumbnail_large: 600
  };

  const thumbnails = {};

  for (const [name, size] of Object.entries(sizes)) {
    const resizedBuffer = await sharp(imageBuffer)
      .resize(size, size, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: 80 })
      .toBuffer();

    const thumbnailKey = originalKey.replace(/\.[^.]+$/, `_${name}.jpg`);

    await s3Client.send(new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: thumbnailKey,
      Body: resizedBuffer,
      ContentType: 'image/jpeg'
    }));

    thumbnails[name] = thumbnailKey;
  }

  return thumbnails;
}

/**
 * Convert image to WebP format
 */
async function convertToWebP(imageBuffer, originalKey) {
  const webpBuffer = await sharp(imageBuffer)
    .webp({ quality: 80 })
    .toBuffer();

  const webpKey = originalKey.replace(/\.[^.]+$/, '.webp');

  await s3Client.send(new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: webpKey,
    Body: webpBuffer,
    ContentType: 'image/webp'
  }));

  return webpKey;
}

/**
 * Analyze image using AWS Rekognition
 */
async function analyzeImage(s3Key) {
  try {
    // Detect labels
    const labelsCommand = new DetectLabelsCommand({
      Image: {
        S3Object: {
          Bucket: BUCKET_NAME,
          Name: s3Key
        }
      },
      MaxLabels: 10,
      MinConfidence: 70
    });

    const labelsResponse = await rekognitionClient.send(labelsCommand);

    // Detect moderation labels (inappropriate content)
    const moderationCommand = new DetectModerationLabelsCommand({
      Image: {
        S3Object: {
          Bucket: BUCKET_NAME,
          Name: s3Key
        }
      },
      MinConfidence: 60
    });

    const moderationResponse = await rekognitionClient.send(moderationCommand);

    return {
      labels: labelsResponse.Labels?.map(label => ({
        name: label.Name,
        confidence: label.Confidence
      })) || [],
      moderation: moderationResponse.ModerationLabels?.map(label => ({
        name: label.Name,
        confidence: label.Confidence,
        parentName: label.ParentName
      })) || [],
      isSafe: moderationResponse.ModerationLabels?.length === 0
    };

  } catch (error) {
    console.error('Rekognition analysis error:', error);
    return {
      labels: [],
      moderation: [],
      isSafe: true,
      error: error.message
    };
  }
}

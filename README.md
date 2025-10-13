# Serverless API - Image Processing Platform# Serverless API - Enterprise Image Processing Platform



<div align="center"><div align="center">



![Tech Stack](https://skillicons.dev/icons?i=aws,nodejs,dynamodb,typescript,github)![AWS Lambda](https://skillicons.dev/icons?i=aws)

![Node.js](https://skillicons.dev/icons?i=nodejs)

**Production-grade serverless image processing with AI-powered analysis**![DynamoDB](https://skillicons.dev/icons?i=dynamodb)

![TypeScript](https://skillicons.dev/icons?i=ts)

[View Demo](#demo-outputs) • [Architecture](#architecture) • [Quick Start](#quick-start) • [API Docs](#api-reference) • [Integration](#project-integration)![GitHub Actions](https://skillicons.dev/icons?i=github)



---**Production-grade serverless image processing API with AI-powered analysis and automated deployment**



**Part of a Full-Stack Portfolio** | **[Connect with CI/CD API →](../cicd-pipeline)**[Features](#features) • [Architecture](#architecture) • [Quick Start](#quick-start) • [API Reference](#api-reference) • [Deployment](#deployment)



</div></div>



------



## Table of Contents## Table of Contents



- [Overview](#overview)- [Overview](#overview)

- [Key Features](#key-features)- [Features](#features)

- [Tech Stack](#tech-stack)- [Tech Stack](#tech-stack)

- [Architecture](#architecture)- [Architecture](#architecture)

- [Project Structure](#project-structure)- [Project Structure](#project-structure)

- [Prerequisites](#prerequisites)- [Prerequisites](#prerequisites)

- [Quick Start](#quick-start)- [Quick Start](#quick-start)

- [API Reference](#api-reference)- [API Reference](#api-reference)

- [Demo Outputs](#demo-outputs)- [Testing](#testing)

- [Testing](#testing)- [CI/CD Pipeline](#cicd-pipeline)

- [CI/CD Pipeline](#cicd-pipeline)- [Deployment](#deployment)

- [Deployment](#deployment)- [Configuration](#configuration)

- [Project Integration](#project-integration)- [Cost Optimization](#cost-optimization)

- [Cost Optimization](#cost-optimization)- [Monitoring](#monitoring)

- [Monitoring](#monitoring)- [Troubleshooting](#troubleshooting)

- [Troubleshooting](#troubleshooting)

---

---

## Overview

## Overview

An enterprise-grade serverless image processing platform built on AWS Lambda, demonstrating modern cloud-native architecture with event-driven design, AI integration, and comprehensive infrastructure as code.

Enterprise-grade **serverless image processing platform** built on AWS Lambda. Demonstrates modern cloud-native architecture with event-driven design, AI integration, and comprehensive infrastructure as code.

### Key Highlights

This project showcases:

- Serverless architecture and microservices- **Serverless architecture** with AWS Lambda and API Gateway

- AWS cloud services integration- **AI-powered image analysis** using AWS Rekognition

- Event-driven processing patterns- **Automatic image optimization** (thumbnails, WebP conversion)

- AI/ML integration for image analysis- **Event-driven processing** with SQS and async workflows

- Infrastructure as Code with AWS SAM- **Infrastructure as Code** using AWS SAM

- **Complete CI/CD pipeline** with GitHub Actions

---- **Auto-scaling** and pay-per-use pricing

- **Production-ready** monitoring and observability

## Key Features

---

<table>

<tr>## Features

<td width="50%">

### Image Processing

**Image Processing**- Pre-signed URL upload to S3

- Upload images to S3- Automatic thumbnail generation (multiple sizes)

- Automatic thumbnail generation- WebP conversion for optimization

- WebP format conversion- Image metadata extraction

- Multiple size variants- EXIF data processing

- Pre-signed URLs

- Secure access control### AI Analysis

- Object detection (AWS Rekognition)

</td>- Label identification

<td width="50%">- Scene classification

- Content moderation

**AI-Powered Analysis**- Celebrity recognition

- Object detection

- Label recognition### Storage & Metadata

- Content moderation- S3 bucket with lifecycle policies

- Face detection- DynamoDB for metadata storage

- Text extraction (OCR)- Global Secondary Index for queries

- Celebrity recognition- TTL-based automatic cleanup

- Versioning and backup

</td>

</tr>### Async Processing

<tr>- SQS queue for background jobs

<td width="50%">- Dead Letter Queue (DLQ) for failures

- Retry mechanisms with exponential backoff

**Serverless Architecture**- Status tracking

- AWS Lambda functions

- API Gateway REST API### Security

- DynamoDB for metadata- API Gateway with API key authentication

- S3 for object storage- Usage plans and throttling

- SQS for async processing- S3 bucket encryption at rest

- CloudWatch monitoring- IAM least privilege policies

- Pre-signed URLs with expiration

</td>- VPC integration ready

<td width="50%">

---

**Infrastructure & CI/CD**

- AWS SAM templates## Tech Stack

- CloudFormation stacks

- GitHub Actions pipeline### Cloud Platform

- Automated testing![AWS](https://img.shields.io/badge/AWS-Serverless-FF9900?style=flat&logo=amazon-aws&logoColor=white)

- Multi-environment support![Lambda](https://img.shields.io/badge/Lambda-Functions-FF9900?style=flat&logo=aws-lambda&logoColor=white)

- Cost optimization![API Gateway](https://img.shields.io/badge/API_Gateway-REST-FF9900?style=flat&logo=amazon-api-gateway&logoColor=white)



</td>### Compute & Storage

</tr>![S3](https://img.shields.io/badge/S3-Object_Storage-569A31?style=flat&logo=amazon-s3&logoColor=white)

</table>![DynamoDB](https://img.shields.io/badge/DynamoDB-NoSQL-4053D6?style=flat&logo=amazon-dynamodb&logoColor=white)

![SQS](https://img.shields.io/badge/SQS-Message_Queue-FF4F8B?style=flat&logo=amazon-sqs&logoColor=white)

---

### Runtime & Language

## Tech Stack![Node.js](https://img.shields.io/badge/Node.js-18-339933?style=flat&logo=node.js&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)

<div align="center">

### AI/ML Services

**Cloud Services**![Rekognition](https://img.shields.io/badge/Rekognition-AI_Vision-FF9900?style=flat&logo=amazon-aws&logoColor=white)



![AWS](https://skillicons.dev/icons?i=aws) AWS Lambda, API Gateway, S3, DynamoDB, SQS, Rekognition, CloudWatch### Infrastructure & DevOps

![AWS SAM](https://img.shields.io/badge/SAM-IaC-FF9900?style=flat&logo=amazon-aws&logoColor=white)

**Backend & Runtime**![CloudFormation](https://img.shields.io/badge/CloudFormation-Stacks-FF9900?style=flat&logo=amazon-aws&logoColor=white)

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=flat&logo=github-actions&logoColor=white)

![Node.js](https://skillicons.dev/icons?i=nodejs) ![TypeScript](https://skillicons.dev/icons?i=typescript) ![JavaScript](https://skillicons.dev/icons?i=js)

### Monitoring

**Infrastructure & DevOps**![CloudWatch](https://img.shields.io/badge/CloudWatch-Logs-FF4F8B?style=flat&logo=amazon-cloudwatch&logoColor=white)

![X-Ray](https://img.shields.io/badge/X--Ray-Tracing-FF9900?style=flat&logo=amazon-aws&logoColor=white)

![GitHub Actions](https://skillicons.dev/icons?i=github) AWS SAM, CloudFormation

### Testing

**Testing & Tools**![Jest](https://img.shields.io/badge/Jest-Testing-C21325?style=flat&logo=jest&logoColor=white)

![ESLint](https://img.shields.io/badge/ESLint-Linting-4B32C3?style=flat&logo=eslint&logoColor=white)

![Jest](https://skillicons.dev/icons?i=jest) ![Git](https://skillicons.dev/icons?i=git) ![VSCode](https://skillicons.dev/icons?i=vscode)

---

</div>

## Architecture

---

### System Architecture

## Architecture

```mermaid

### System Architecturegraph TB

    subgraph "Client Layer"

```mermaid        Client[Web/Mobile Client]

graph TB    end

    subgraph "Client Layer"    

        Client[Client Application]    subgraph "API Layer"

    end        APIGW[API Gateway<br/>REST API + API Keys]

        end

    subgraph "API Gateway Layer"    

        APIG[API Gateway<br/>REST API<br/>API Key Auth]    subgraph "Lambda Functions"

    end        Upload[Upload Function<br/>Generate Pre-signed URL]

            List[List Function<br/>Query Metadata]

    subgraph "Lambda Functions"        Get[Get Function<br/>Retrieve Image]

        Upload[Upload Function<br/>Pre-signed URLs]        Delete[Delete Function<br/>Remove Image]

        List[List Function<br/>Query Metadata]        Process[Process Function<br/>Image Processing]

        Get[Get Function<br/>Retrieve Image]        Status[Status Function<br/>Check Progress]

        Delete[Delete Function<br/>Remove Image]    end

        Status[Status Function<br/>Processing Status]    

    end    subgraph "Storage"

            S3[S3 Bucket<br/>Image Storage<br/>Encryption + Lifecycle]

    subgraph "Processing Layer"        DDB[(DynamoDB<br/>Metadata + GSI)]

        Queue[SQS Queue<br/>Async Processing]    end

        Process[Process Function<br/>Image Processing]    

    end    subgraph "Queue"

            SQS[SQS Queue<br/>Async Processing]

    subgraph "Storage Layer"        DLQ[Dead Letter Queue]

        S3[(S3 Bucket<br/>Image Storage)]    end

        DDB[(DynamoDB<br/>Metadata)]    

    end    subgraph "AI Services"

            Rekog[AWS Rekognition<br/>Image Analysis]

    subgraph "AI Layer"    end

        Rekognition[AWS Rekognition<br/>Image Analysis]    

    end    subgraph "Monitoring"

            CW[CloudWatch<br/>Logs + Metrics]

    Client -->|HTTPS| APIG        XRay[X-Ray<br/>Distributed Tracing]

    APIG --> Upload        Alarms[CloudWatch Alarms]

    APIG --> List    end

    APIG --> Get    

    APIG --> Delete    Client --> APIGW

    APIG --> Status    APIGW --> Upload

        APIGW --> List

    Upload --> S3    APIGW --> Get

    Upload --> DDB    APIGW --> Delete

    Upload --> Queue    APIGW --> Status

        

    Queue --> Process    Upload --> S3

    Process --> S3    Upload --> DDB

    Process --> DDB    Upload --> SQS

    Process --> Rekognition    

        List --> DDB

    List --> DDB    Get --> S3

    Get --> S3    Get --> DDB

    Get --> DDB    Delete --> S3

    Delete --> S3    Delete --> DDB

    Delete --> DDB    

    Status --> DDB    SQS --> Process

        Process --> S3

    style APIG fill:#FF9900    Process --> DDB

    style Upload fill:#FF9900    Process --> Rekog

    style Process fill:#FF9900    

    style S3 fill:#569A31    SQS -.Failures.-> DLQ

    style DDB fill:#4053D6    Status --> DDB

    style Queue fill:#FF9900    

    style Rekognition fill:#FF9900    Upload --> CW

```    List --> CW

    Get --> CW

### Data Flow Diagram    Delete --> CW

    Process --> CW

```mermaid    Status --> CW

sequenceDiagram    

    participant C as Client    Upload --> XRay

    participant AG as API Gateway    Process --> XRay

    participant UL as Upload Lambda    

    participant S3 as S3 Bucket    CW --> Alarms

    participant SQS as SQS Queue    

    participant PL as Process Lambda    style Client fill:#e1f5ff

    participant DB as DynamoDB    style APIGW fill:#90ee90

    participant RK as Rekognition    style Upload fill:#ffd700

    style List fill:#ffd700

    C->>AG: POST /images/upload    style Get fill:#ffd700

    AG->>UL: Invoke Upload Function    style Delete fill:#ffd700

    UL->>S3: Generate Pre-signed URL    style Process fill:#ff6347

    UL->>DB: Create Metadata Entry    style Status fill:#ffd700

    UL->>SQS: Send Processing Message    style S3 fill:#569a31

    UL-->>C: Return Upload URL    style DDB fill:#4053d6

        style SQS fill:#ff4f8b

    C->>S3: Upload Image (Pre-signed URL)    style DLQ fill:#ff0000

        style Rekog fill:#ff9900

    SQS->>PL: Trigger Process Function    style CW fill:#ff4f8b

    PL->>S3: Read Original Image    style XRay fill:#ff9900

    PL->>PL: Generate Thumbnails```

    PL->>PL: Convert to WebP

    PL->>S3: Upload Processed Images### Image Processing Workflow

    PL->>RK: Analyze Image

    RK-->>PL: Return Labels & Objects```mermaid

    PL->>DB: Update MetadatasequenceDiagram

        participant C as Client

    C->>AG: GET /images/{id}/status    participant AG as API Gateway

    AG->>DB: Query Status    participant UF as Upload Function

    DB-->>C: Return Processing Status    participant S3 as S3 Bucket

```    participant DDB as DynamoDB

    participant SQS as SQS Queue

---    participant PF as Process Function

    participant RK as Rekognition

## Project Structure    

    C->>AG: POST /images/upload

```    AG->>UF: Invoke with fileName

serverless-api/    UF->>S3: Generate pre-signed URL

├── .github/    S3-->>UF: Pre-signed URL

│   └── workflows/    UF->>DDB: Store metadata (pending)

│       └── deploy.yml            # CI/CD pipeline    UF->>SQS: Send processing message

├── src/    UF-->>AG: Return upload URL

│   ├── functions/    AG-->>C: {uploadUrl, imageId}

│   │   ├── upload/    

│   │   │   └── index.js          # Upload function    C->>S3: PUT image (pre-signed URL)

│   │   ├── list/    S3-->>C: 200 OK

│   │   │   └── index.js          # List images function    

│   │   ├── get/    SQS->>PF: Trigger processing

│   │   │   └── index.js          # Get image function    PF->>S3: Download original image

│   │   ├── delete/    S3-->>PF: Image data

│   │   │   └── index.js          # Delete image function    

│   │   ├── process/    PF->>PF: Generate thumbnail

│   │   │   └── index.js          # Image processing function    PF->>S3: Upload thumbnail

│   │   └── status/    

│   │       └── index.js          # Status check function    PF->>PF: Convert to WebP

│   └── layers/    PF->>S3: Upload WebP

│       └── common/    

│           └── nodejs/    PF->>RK: Analyze image

│               └── package.json  # Shared dependencies    RK-->>PF: Labels & objects

├── tests/    

│   ├── unit/    PF->>DDB: Update metadata (completed)

│   │   └── upload.test.js        # Unit tests    

│   └── setup.js                  # Test configuration    C->>AG: GET /images/{id}/status

├── template.yaml                  # AWS SAM template    AG->>Status: Check status

├── samconfig.toml                 # SAM configuration    Status->>DDB: Query metadata

├── package.json                   # Dependencies    DDB-->>Status: Status data

├── jest.config.js                 # Test configuration    Status-->>AG: Processing status

└── README.md                      # This file    AG-->>C: {status: "completed"}

``````



---### Event-Driven Processing



## Prerequisites```mermaid

graph LR

- **AWS Account** with appropriate permissions    A[Image Upload] --> B[S3 Event]

- **AWS CLI** installed and configured    B --> C[SQS Message]

- **AWS SAM CLI** installed    C --> D{Lambda Trigger}

- **Node.js 18+**    D --> E[Process Image]

- **Docker** (for local testing)    E --> F[Generate Thumbnail]

    E --> G[Convert WebP]

### Install AWS SAM CLI    E --> H[AI Analysis]

    F --> I[Update Metadata]

**Windows (Chocolatey):**    G --> I

```bash    H --> I

choco install aws-sam-cli    I --> J[Complete]

```    

    D -.Error.-> K[Retry 3x]

**macOS:**    K -.Still Fails.-> L[DLQ]

```bash    L --> M[Alert]

brew install aws-sam-cli    

```    style A fill:#90ee90

    style B fill:#87ceeb

**Verify Installation:**    style C fill:#ffd700

```bash    style D fill:#ffd700

sam --version    style E fill:#ff6347

aws --version    style F fill:#da70d6

```    style G fill:#da70d6

    style H fill:#ff9900

---    style I fill:#4053d6

    style J fill:#00ff00

## Quick Start    style K fill:#ffa500

    style L fill:#ff0000

### 1. Configure AWS Credentials    style M fill:#ff0000

```

```bash

aws configure### AWS Services Integration

# AWS Access Key ID: YOUR_ACCESS_KEY

# AWS Secret Access Key: YOUR_SECRET_KEY```mermaid

# Default region: us-east-1graph TB

# Default output format: json    subgraph "API Layer"

```        AG[API Gateway]

        AK[API Keys]

### 2. Clone and Install        UP[Usage Plans]

    end

```bash    

git clone https://github.com/yourusername/serverless-api.git    subgraph "Compute"

cd serverless-api        L1[Lambda: Upload]

        L2[Lambda: List]

# Install dependencies        L3[Lambda: Get]

npm install        L4[Lambda: Delete]

```        L5[Lambda: Process]

        L6[Lambda: Status]

### 3. Build the Application    end

    

```bash    subgraph "Storage & Data"

sam build        S3[S3 Bucket]

```        DDB[DynamoDB Table]

        GSI[Global Secondary Index]

**Expected Output:**    end

```    

Building codeuri: /path/to/serverless-api runtime: nodejs18.x    subgraph "Messaging"

Running NodejsNpmBuilder:NpmPack        SQS[SQS Queue]

Running NodejsNpmBuilder:CopyNpmrc        DLQ[Dead Letter Queue]

    end

Build Succeeded    

    subgraph "AI/ML"

Built Artifacts  : .aws-sam/build        REK[Rekognition]

Built Template   : .aws-sam/build/template.yaml    end

```    

    subgraph "Observability"

### 4. Deploy to AWS        CW[CloudWatch Logs]

        CWM[CloudWatch Metrics]

```bash        XR[X-Ray Tracing]

sam deploy --guided        ALM[CloudWatch Alarms]

```    end

    

**Follow the prompts:**    subgraph "Security"

```        IAM[IAM Roles]

Stack Name [serverless-image-api]: serverless-image-api        KMS[KMS Encryption]

AWS Region [us-east-1]: us-east-1    end

Confirm changes before deploy [Y/n]: Y    

Allow SAM CLI IAM role creation [Y/n]: Y    AG --> AK

Disable rollback [y/N]: N    AG --> UP

Save arguments to configuration file [Y/n]: Y    AG --> L1

SAM configuration file [samconfig.toml]: samconfig.toml    AG --> L2

SAM configuration environment [default]: default    AG --> L3

```    AG --> L4

    AG --> L6

**Deployment Output:**    

```    L1 --> S3

CloudFormation outputs from deployed stack    L1 --> DDB

--------------------------------------------------------------------------------    L1 --> SQS

Outputs                                                                             L2 --> DDB

--------------------------------------------------------------------------------    L2 --> GSI

Key                 ApiEndpoint                                                    L3 --> S3

Description         API Gateway endpoint URL                                       L3 --> DDB

Value               https://abc123xyz.execute-api.us-east-1.amazonaws.com/Prod    L4 --> S3

--------------------------------------------------------------------------------    L4 --> DDB

    

Successfully created/updated stack - serverless-image-api in us-east-1    SQS --> L5

```    SQS -.Failures.-> DLQ

    L5 --> S3

### 5. Get API Key    L5 --> DDB

    L5 --> REK

```bash    

# Get API Key ID    L1 --> CW

aws apigateway get-api-keys --query "items[?name=='ServerlessAPIKey'].id" --output text    L2 --> CW

    L3 --> CW

# Get API Key Value (replace YOUR_KEY_ID)    L4 --> CW

aws apigateway get-api-key --api-key YOUR_KEY_ID --include-value --query "value" --output text    L5 --> CW

```    L6 --> CW

    

---    L1 --> XR

    L5 --> XR

## API Reference    

    CW --> ALM

### Base URL    

    S3 --> KMS

```    DDB --> KMS

https://{api-id}.execute-api.us-east-1.amazonaws.com/Prod    

```    L1 --> IAM

    L2 --> IAM

### Authentication    L3 --> IAM

    L4 --> IAM

All requests require an API key in the header:    L5 --> IAM

```    L6 --> IAM

x-api-key: YOUR_API_KEY_HERE    

```    style AG fill:#90ee90

    style L5 fill:#ff6347

### Endpoints    style S3 fill:#569a31

    style DDB fill:#4053d6

#### 1. Upload Image    style SQS fill:#ff4f8b

    style REK fill:#ff9900

**Request:**```

```bash

curl -X POST https://your-api-url/images/upload \---

  -H "x-api-key: YOUR_API_KEY" \

  -H "Content-Type: application/json" \## Project Structure

  -d '{

    "fileName": "photo.jpg",```

    "fileType": "image/jpeg"serverless-api/

  }'├── .github/

```│   └── workflows/

│       └── deploy.yml                # CI/CD pipeline

**Response:**├── src/

```json│   ├── functions/

{│   │   ├── upload/

  "imageId": "550e8400-e29b-41d4-a716-446655440000",│   │   │   └── index.js              # Generate pre-signed URLs

  "uploadUrl": "https://bucket.s3.amazonaws.com/550e8400...?signature=...",│   │   ├── list/

  "expiresIn": 3600│   │   │   └── index.js              # List images with pagination

}│   │   ├── get/

```│   │   │   └── index.js              # Get image details & download URL

│   │   ├── delete/

**Upload the Image:**│   │   │   └── index.js              # Delete image from S3 & DynamoDB

```bash│   │   ├── process/

curl -X PUT "UPLOAD_URL_FROM_RESPONSE" \│   │   │   └── index.js              # Background image processing

  -H "Content-Type: image/jpeg" \│   │   └── status/

  --data-binary "@photo.jpg"│   │       └── index.js              # Check processing status

```│   └── layers/

│       └── common/

#### 2. List Images│           └── nodejs/

│               └── package.json      # Shared dependencies (Sharp, AWS SDK)

**Request:**├── tests/

```bash│   ├── unit/

curl -X GET https://your-api-url/images \│   │   └── upload.test.js            # Unit tests

  -H "x-api-key: YOUR_API_KEY"│   └── setup.js                      # Test configuration

```├── template.yaml                     # AWS SAM template (IaC)

├── samconfig.toml                    # SAM deployment config

**Response:**├── package.json                      # Project dependencies

```json├── jest.config.js                    # Jest configuration

{├── .eslintrc.js                      # ESLint rules

  "images": [├── .gitignore                        # Git ignore rules

    {└── README.md                         # This file

      "imageId": "550e8400-e29b-41d4-a716-446655440000",```

      "fileName": "photo.jpg",

      "fileSize": 1024000,---

      "contentType": "image/jpeg",

      "status": "completed",## Prerequisites

      "uploadedAt": "2025-10-13T12:00:00.000Z",

      "thumbnails": {### Required

        "small": "https://bucket.s3.amazonaws.com/550e8400.../thumbnail-small.jpg",

        "medium": "https://bucket.s3.amazonaws.com/550e8400.../thumbnail-medium.jpg",- ![Node.js](https://img.shields.io/badge/Node.js-18.0+-339933?style=flat&logo=node.js) **Node.js 18+** and npm 9+

        "large": "https://bucket.s3.amazonaws.com/550e8400.../thumbnail-large.jpg"- ![AWS CLI](https://img.shields.io/badge/AWS_CLI-2.0+-FF9900?style=flat&logo=amazon-aws) **AWS CLI** configured with credentials

      },- ![SAM CLI](https://img.shields.io/badge/SAM_CLI-1.0+-FF9900?style=flat&logo=amazon-aws) **AWS SAM CLI** for deployment

      "analysis": {- ![Git](https://img.shields.io/badge/Git-2.0+-F05032?style=flat&logo=git) **Git** for version control

        "labels": ["Mountain", "Nature", "Landscape"],

        "objects": ["Tree", "Sky", "Cloud"],### AWS Account Requirements

        "confidence": 98.5

      }- Active AWS account

    }- IAM user with permissions for:

  ],  - Lambda

  "count": 1  - API Gateway

}  - S3

```  - DynamoDB

  - SQS

#### 3. Get Image Details  - CloudFormation

  - CloudWatch

**Request:**  - Rekognition

```bash  - IAM (for role creation)

curl -X GET https://your-api-url/images/{imageId} \

  -H "x-api-key: YOUR_API_KEY"---

```

## Quick Start

**Response:**

```json### 1. Clone the Repository

{

  "imageId": "550e8400-e29b-41d4-a716-446655440000",```bash

  "fileName": "photo.jpg",git clone <your-repo-url>

  "downloadUrl": "https://bucket.s3.amazonaws.com/550e8400...?signature=...",cd serverless-api

  "thumbnails": {```

    "small": "https://...",

    "medium": "https://...",### 2. Install Dependencies

    "large": "https://..."

  },```bash

  "metadata": {npm install

    "width": 1920,```

    "height": 1080,

    "format": "jpeg",### 3. Configure AWS Credentials

    "size": 1024000

  },```bash

  "analysis": {# Configure AWS CLI (first time only)

    "labels": ["Mountain", "Nature", "Landscape"],aws configure

    "objects": [

      { "name": "Tree", "confidence": 99.2 },# You'll be prompted for:

      { "name": "Sky", "confidence": 98.7 }# - AWS Access Key ID

    ],# - AWS Secret Access Key

    "moderationLabels": [],# - Default region (e.g., us-east-1)

    "faces": 0# - Default output format (json)

  },

  "status": "completed",# Verify configuration

  "uploadedAt": "2025-10-13T12:00:00.000Z",aws sts get-caller-identity

  "processedAt": "2025-10-13T12:00:15.000Z"```

}

```### 4. Build the Application



#### 4. Delete Image```bash

sam build

**Request:**```

```bash

curl -X DELETE https://your-api-url/images/{imageId} \This will:

  -H "x-api-key: YOUR_API_KEY"- Package Lambda functions

```- Install dependencies in Lambda layers

- Prepare CloudFormation templates

**Response:**

```json### 5. Deploy to AWS

{

  "message": "Image deleted successfully",```bash

  "imageId": "550e8400-e29b-41d4-a716-446655440000"sam deploy --guided

}```

```

Answer the prompts:

#### 5. Get Processing Status```

Stack Name: serverless-image-api

**Request:**AWS Region: us-east-1

```bashConfirm changes before deploy: Y

curl -X GET https://your-api-url/images/{imageId}/status \Allow SAM CLI IAM role creation: Y

  -H "x-api-key: YOUR_API_KEY"Allow function without authorization defined: N

```Save arguments to configuration file: Y

SAM configuration file: samconfig.toml

**Response:**SAM configuration environment: default

```json```

{

  "imageId": "550e8400-e29b-41d4-a716-446655440000",### 6. Get API Details

  "status": "processing",

  "progress": 75,After successful deployment, SAM will output:

  "message": "Generating thumbnails and analyzing image",

  "startedAt": "2025-10-13T12:00:00.000Z",```

  "estimatedCompletion": "2025-10-13T12:00:30.000Z"Outputs:

}-----------------------------------------------------------------

```ApiEndpoint = https://abc123xyz.execute-api.us-east-1.amazonaws.com/Prod/

-----------------------------------------------------------------

---```



## Demo Outputs**Get API Key:**



### Deployment Process```bash

# Get API key ID

```bashaws apigateway get-api-keys \

$ sam build  --query "items[?name=='ServerlessAPIKey'].id" \

Building codeuri: /serverless-api runtime: nodejs18.x  --output text

Running NodejsNpmBuilder:NpmPack

# Get API key value (replace YOUR_KEY_ID)

Build Succeededaws apigateway get-api-key \

  --api-key YOUR_KEY_ID \

Built Artifacts  : .aws-sam/build  --include-value \

Built Template   : .aws-sam/build/template.yaml  --query "value" \

  --output text

$ sam deploy --guided```



Deploying with following values### 7. Test the API

===============================

Stack name                   : serverless-image-api```bash

Region                       : us-east-1# Set variables

Confirm changeset           : Trueexport API_URL="https://abc123xyz.execute-api.us-east-1.amazonaws.com/Prod"

Disable rollback            : Falseexport API_KEY="your_api_key_value"

Deployment s3 bucket        : aws-sam-cli-managed-default-bucket

Capabilities                : ["CAPABILITY_IAM"]# List images (should return empty array initially)

Parameter overrides         : {}curl -H "x-api-key: $API_KEY" $API_URL/images

Signing Profiles            : {}

# Generate upload URL

Initiating deploymentcurl -X POST \

=====================  -H "x-api-key: $API_KEY" \

  -H "Content-Type: application/json" \

Waiting for changeset to be created..  -d '{"fileName":"test.jpg","fileType":"image/jpeg"}' \

  $API_URL/images/upload

CloudFormation stack changeset```

-------------------------------------------------------------------------------------------------

Operation                     LogicalResourceId             ResourceType                  ---

-------------------------------------------------------------------------------------------------

+ Add                         ApiGatewayApi                 AWS::ApiGateway::RestApi      ## API Reference

+ Add                         UploadFunction                AWS::Lambda::Function         

+ Add                         ProcessFunction               AWS::Lambda::Function         ### Base URL

+ Add                         ImageBucket                   AWS::S3::Bucket               

+ Add                         MetadataTable                 AWS::DynamoDB::Table          ```

+ Add                         ProcessingQueue               AWS::SQS::Queue               https://[api-id].execute-api.[region].amazonaws.com/Prod

-------------------------------------------------------------------------------------------------```



Changeset created successfully### Authentication



2025-10-13 12:00:00 - Waiting for stack create/update to completeAll endpoints require an API key in the header:



CloudFormation events from stack operations```

-------------------------------------------------------------------------------------------------x-api-key: your_api_key_value

ResourceStatus                ResourceType                  LogicalResourceId             ```

-------------------------------------------------------------------------------------------------

CREATE_IN_PROGRESS            AWS::S3::Bucket               ImageBucket                   ### Endpoints

CREATE_IN_PROGRESS            AWS::DynamoDB::Table          MetadataTable                 

CREATE_COMPLETE               AWS::S3::Bucket               ImageBucket                   #### Upload Image

CREATE_COMPLETE               AWS::DynamoDB::Table          MetadataTable                 

CREATE_IN_PROGRESS            AWS::Lambda::Function         UploadFunction                Generate a pre-signed URL for uploading an image to S3.

CREATE_COMPLETE               AWS::Lambda::Function         UploadFunction                

CREATE_COMPLETE               AWS::CloudFormation::Stack    serverless-image-api          ```http

-------------------------------------------------------------------------------------------------POST /images/upload

x-api-key: YOUR_API_KEY

Successfully created/updated stack - serverless-image-api in us-east-1Content-Type: application/json



Stack outputs:{

--------------------------------------------------------------------------------  "fileName": "photo.jpg",

Key                 ApiEndpoint  "fileType": "image/jpeg"

Description         API Gateway endpoint URL}

Value               https://abc123xyz.execute-api.us-east-1.amazonaws.com/Prod

--------------------------------------------------------------------------------Response: 200 OK

```{

  "imageId": "550e8400-e29b-41d4-a716-446655440000",

### Testing the API  "uploadUrl": "https://bucket.s3.amazonaws.com/...?X-Amz-Signature=...",

  "expiresIn": 3600,

```bash  "fields": {}

$ export API_URL="https://abc123xyz.execute-api.us-east-1.amazonaws.com/Prod"}

$ export API_KEY="your-api-key-here"```



$ curl -H "x-api-key: $API_KEY" $API_URL/imagesSupported file types:

{- `image/jpeg`

  "images": [],- `image/png`

  "count": 0- `image/gif`

}- `image/webp`



$ curl -X POST -H "x-api-key: $API_KEY" \**Usage:**

    -H "Content-Type: application/json" \1. Call this endpoint to get a pre-signed URL

    -d '{"fileName":"test.jpg","fileType":"image/jpeg"}' \2. Upload the image directly to S3 using the URL

    $API_URL/images/upload3. Image processing starts automatically

{

  "imageId": "550e8400-e29b-41d4-a716-446655440000",#### List Images

  "uploadUrl": "https://bucket.s3.amazonaws.com/...",

  "expiresIn": 3600Retrieve a paginated list of all images.

}

```http

$ # Upload completedGET /images?limit=10

$ curl -H "x-api-key: $API_KEY" $API_URL/images/550e8400-e29b-41d4-a716-446655440000/statusx-api-key: YOUR_API_KEY

{

  "imageId": "550e8400-e29b-41d4-a716-446655440000",Response: 200 OK

  "status": "processing",{

  "progress": 50,  "images": [

  "message": "Processing image..."    {

}      "imageId": "uuid",

      "fileName": "photo.jpg",

$ # Wait a few seconds      "fileType": "image/jpeg",

$ curl -H "x-api-key: $API_KEY" $API_URL/images/550e8400-e29b-41d4-a716-446655440000/status      "size": 1048576,

{      "status": "completed",

  "imageId": "550e8400-e29b-41d4-a716-446655440000",      "uploadedAt": "2025-10-13T10:30:00.000Z",

  "status": "completed",      "thumbnails": {

  "progress": 100,        "small": "https://...",

  "message": "Image processing completed"        "medium": "https://...",

}        "large": "https://..."

```      }

    }

---  ],

  "count": 1,

## Testing  "lastEvaluatedKey": "..."

}

### Run Unit Tests```



```bashQuery parameters:

npm test- `limit` (optional): Number of results (default: 10, max: 100)

```- `lastEvaluatedKey` (optional): For pagination



**Output:**#### Get Image

```

 PASS  tests/unit/upload.test.jsRetrieve a specific image's metadata and download URL.

  Upload Function

    ✓ should generate pre-signed URL (234 ms)```http

    ✓ should validate file type (89 ms)GET /images/{imageId}

    ✓ should create DynamoDB entry (156 ms)x-api-key: YOUR_API_KEY



Test Suites: 1 passed, 1 totalResponse: 200 OK

Tests:       3 passed, 3 total{

Snapshots:   0 total  "imageId": "uuid",

Time:        3.452 s  "fileName": "photo.jpg",

```  "fileType": "image/jpeg",

  "size": 1048576,

### Run Integration Tests Locally  "status": "completed",

  "downloadUrl": "https://...",

```bash  "thumbnails": {

# Start local API    "small": "https://...",

sam local start-api    "medium": "https://...",

    "large": "https://..."

# In another terminal, test endpoints  },

curl http://localhost:3000/images  "metadata": {

```    "width": 1920,

    "height": 1080,

---    "format": "jpeg"

  },

## CI/CD Pipeline  "analysis": {

    "labels": ["Person", "Outdoor", "Nature"],

### Pipeline Architecture    "objects": [...],

    "confidence": 98.5

```mermaid  },

graph LR  "uploadedAt": "2025-10-13T10:30:00.000Z",

    A[Push to Main] --> B[Checkout Code]  "processedAt": "2025-10-13T10:30:15.000Z",

    B --> C[Setup Node.js]  "expiresAt": "2025-11-13T10:30:00.000Z"

    C --> D[Install Dependencies]}

    D --> E[Run Tests]```

    E --> F[Lint Code]

    F --> G[SAM Build]#### Delete Image

    G --> H{Branch?}

    H -->|develop| I[Deploy to Dev]Delete an image and all its associated data.

    H -->|main| J[Deploy to Staging]

    J --> K{Tests Pass?}```http

    K -->|Yes| L[Deploy to Production]DELETE /images/{imageId}

    K -->|No| M[Rollback]x-api-key: YOUR_API_KEY

    

    style A fill:#4078c0Response: 200 OK

    style E fill:#28a745{

    style F fill:#6f42c1  "message": "Image deleted successfully",

    style L fill:#28a745  "imageId": "uuid"

    style M fill:#d73a49}

``````



### Pipeline StagesThis will delete:

- Original image from S3

| Stage | Action | Duration |- All thumbnails from S3

|-------|--------|----------|- Metadata from DynamoDB

| **Checkout** | Clone repository | ~10s |- Processing queue messages

| **Setup** | Install Node.js & SAM CLI | ~30s |

| **Dependencies** | npm install | ~45s |#### Check Processing Status

| **Test** | Run Jest tests | ~1m |

| **Lint** | ESLint validation | ~30s |Check the processing status of an uploaded image.

| **Build** | SAM build | ~2m |

| **Deploy** | SAM deploy | ~5m |```http

GET /images/{imageId}/status

---x-api-key: YOUR_API_KEY



## DeploymentResponse: 200 OK

{

### Deploy to Development  "imageId": "uuid",

  "status": "processing",

```bash  "progress": {

sam deploy --config-env dev    "thumbnail": "completed",

```    "webp": "processing",

    "analysis": "pending"

### Deploy to Production  },

  "startedAt": "2025-10-13T10:30:00.000Z",

```bash  "estimatedCompletion": "2025-10-13T10:30:30.000Z"

sam deploy --config-env prod}

``````



### View Deployment LogsStatus values:

- `pending` - Upload URL generated, awaiting upload

```bash- `uploaded` - File uploaded to S3

sam logs -n UploadFunction --tail- `processing` - Background processing in progress

sam logs -n ProcessFunction --tail- `completed` - All processing finished

```- `failed` - Processing error occurred



------



## Project Integration## Testing



### Connect with CI/CD Pipeline API### Unit Tests



This serverless API can be integrated with the **[CI/CD Pipeline Task API](../cicd-pipeline)** to provide image processing capabilities.```bash

# Run all tests

**Integration Architecture:**npm test



```mermaid# Run tests in watch mode

graph LRnpm run test:watch

    Client[Client] --> API[Task API<br/>cicd-pipeline]

    API --> DB[(PostgreSQL)]# Run tests with coverage

    API -.->|Proxy| Lambda[Serverless API<br/>This Project]npm test -- --coverage

    Lambda --> S3[(S3)]```

    Lambda --> DDB[(DynamoDB)]

    Lambda --> Rek[Rekognition]### Integration Tests

    

    style API fill:#68A063```bash

    style Lambda fill:#FF9900# Test against deployed stack

    style S3 fill:#569A31sam local start-api

    style DDB fill:#4053D6

    style Rek fill:#FF9900# In another terminal

```curl http://localhost:3000/images

```

**Integration Steps:**

### Load Testing

1. Deploy this serverless API first

2. Copy the API endpoint URL from deployment output```bash

3. Get the API key from AWS Console or CLI# Install artillery

4. Configure the [CI/CD Pipeline API](../cicd-pipeline):npm install -g artillery

   ```bash

   cd ../cicd-pipeline# Run load test

   # Edit .env fileartillery quick --count 10 --num 100 \

   SERVERLESS_API_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/Prod  -H "x-api-key: YOUR_KEY" \

   SERVERLESS_API_KEY=your-api-key  https://your-api.execute-api.us-east-1.amazonaws.com/Prod/images

   ```

   # Restart the API

   docker-compose restart api---

   ```

## CI/CD Pipeline

5. Use image endpoints through the main API:

   ```bash### GitHub Actions Workflow

   # Upload via CI/CD API (it proxies to this serverless API)

   curl -X POST http://localhost/api/v1/images/upload \The pipeline includes 8 jobs:

     -H "Authorization: Bearer YOUR_JWT_TOKEN" \

     -d '{"fileName":"photo.jpg","fileType":"image/jpeg"}'```mermaid

   ```graph LR

    A[1. Code Quality] --> B[2. Security Scan]

[**View CI/CD Pipeline API Documentation →**](../cicd-pipeline)    B --> C[3. Unit Tests]

    C --> D[4. Build SAM]

---    D --> E[5. Deploy Staging]

    E --> F[6. Integration Tests]

## Cost Optimization    F --> G[7. Deploy Production]

    G --> H[8. Smoke Tests]

### AWS Free Tier    

    style A fill:#90ee90

- **Lambda:** 1M free requests/month, 400,000 GB-seconds compute    style B fill:#ffd700

- **API Gateway:** 1M API calls/month (12 months)    style C fill:#87ceeb

- **S3:** 5GB storage, 20,000 GET requests, 2,000 PUT requests    style D fill:#ffa500

- **DynamoDB:** 25GB storage, 200M requests/month    style E fill:#ff6347

    style F fill:#87ceeb

### Estimated Monthly Costs (After Free Tier)    style G fill:#32cd32

    style H fill:#da70d6

With **1,000 images/month**:```



| Service | Usage | Cost |### Required GitHub Secrets

|---------|-------|------|

| Lambda | 1,000 invocations | $0.00 |```bash

| API Gateway | 5,000 requests | $0.02 |AWS_ACCESS_KEY_ID          # AWS credentials

| S3 | 10GB storage | $0.23 |AWS_SECRET_ACCESS_KEY      # AWS credentials

| DynamoDB | Read/Write requests | $0.00 |STAGING_API_KEY            # Staging environment API key

| Rekognition | 1,000 images | $1.00 |PRODUCTION_API_KEY         # Production environment API key

| **Total** | | **~$1.25/month** |CODECOV_TOKEN              # Code coverage reporting

SNYK_TOKEN                 # Security scanning

### Cost Optimization TipsSLACK_WEBHOOK_URL          # Deployment notifications

```

1. **Lifecycle Policies:** Automatically delete old images

2. **S3 Intelligent-Tiering:** Move infrequent access to cheaper storage### Automated Deployment

3. **Lambda Memory:** Optimize memory allocation (currently 512MB)

4. **DynamoDB On-Demand:** Pay per request instead of provisioned capacity```bash

5. **CloudWatch Logs:** Set log retention to 7 days# Push to main branch triggers deployment

git add .

---git commit -m "feat: add new feature"

git push origin main

## Monitoring

# Monitor deployment in GitHub Actions tab

### CloudWatch Metrics```



View in AWS Console → CloudWatch → Dashboards---



**Key Metrics:**## Deployment

- Lambda invocation count

- Lambda error rate### Development Environment

- Lambda duration

- API Gateway 4XX/5XX errors```bash

- DynamoDB throttles# Build

- SQS queue depthsam build



### View Logs# Deploy

sam deploy \

```bash  --stack-name serverless-image-api-dev \

# Upload function logs  --parameter-overrides Environment=dev \

sam logs -n UploadFunction --tail  --no-confirm-changeset

```

# Process function logs

sam logs -n ProcessFunction --tail### Staging Environment



# Filter errors only```bash

sam logs -n ProcessFunction --filter "ERROR"sam deploy \

```  --stack-name serverless-image-api-staging \

  --parameter-overrides Environment=staging \

### X-Ray Tracing  --no-confirm-changeset

```

Enable in `template.yaml`:

```yaml### Production Environment

Globals:

  Function:```bash

    Tracing: Activesam deploy \

```  --stack-name serverless-image-api-prod \

  --parameter-overrides Environment=production \

View traces in AWS Console → X-Ray → Traces  --no-confirm-changeset

```

---

### Rollback

## Troubleshooting

```bash

### Deployment Issues# List previous versions

aws cloudformation list-stack-resources \

**Issue:** Stack already exists  --stack-name serverless-image-api

```bash

# Delete existing stack# Rollback to previous version

sam deleteaws cloudformation cancel-update-stack \

  --stack-name serverless-image-api

# Redeploy```

sam deploy --guided

```### Delete Stack



**Issue:** Insufficient permissions```bash

```bash# Delete everything (careful!)

# Check your IAM permissionssam delete --stack-name serverless-image-api

aws sts get-caller-identity

# Confirm deletion

# Ensure you have:```

# - lambda:*

# - apigateway:*---

# - s3:*

# - dynamodb:*## Configuration

# - cloudformation:*

```### SAM Template Parameters



### API Issues```yaml

Parameters:

**Issue:** 403 Forbidden  Environment:

- Check API key is correct    Type: String

- Ensure `x-api-key` header is set    Default: dev

- Verify API key is enabled in API Gateway    AllowedValues: [dev, staging, production]

  

**Issue:** 500 Internal Server Error  ImageBucketName:

```bash    Type: String

# Check Lambda logs    Default: serverless-images-bucket

sam logs -n UploadFunction --tail  

  EnableXRay:

# Check for common issues:    Type: String

# - Missing environment variables    Default: true

# - IAM permission errors  

# - DynamoDB/S3 access errors  LogRetentionDays:

```    Type: Number

    Default: 7

### Performance Issues```



**Issue:** Slow image processing### Lambda Configuration

- Increase Lambda memory (more memory = more CPU)

- Use smaller image sizes```yaml

- Optimize Sharp library settingsGlobals:

  Function:

**Issue:** SQS messages timing out    Runtime: nodejs18.x

- Increase Lambda timeout    Timeout: 30

- Process images in smaller batches    MemorySize: 512

- Check Rekognition API limits    Environment:

      Variables:

---        NODE_ENV: production

        LOG_LEVEL: info

## Cleanup```



To remove all AWS resources:### DynamoDB Configuration



```bash```yaml

sam deleteDynamoDB:

```  BillingMode: PAY_PER_REQUEST

  PointInTimeRecovery: Enabled

This will delete:  SSESpecification: Enabled

- CloudFormation stack  StreamSpecification: NEW_AND_OLD_IMAGES

- All Lambda functions  TTL: Enabled (30 days)

- API Gateway```

- DynamoDB table

- SQS queue---

- IAM roles

## Cost Optimization

**Note:** S3 bucket must be empty before deletion. Delete manually if needed:

```bash### Pricing Breakdown

aws s3 rb s3://your-bucket-name --force

```#### Lambda

- **Free Tier**: 1M requests/month, 400,000 GB-seconds/month

---- **After Free Tier**: $0.20 per 1M requests

- **Duration**: $0.0000166667 per GB-second

## Key Metrics

#### API Gateway

- **Cold Start:** <1 second- **First 333M requests**: $3.50 per million

- **Processing Time:** 5-10 seconds/image- **Next 667M requests**: $2.80 per million

- **API Response Time:** <200ms

- **Concurrent Processing:** 100+ images#### S3

- **Storage:** Unlimited (S3)- **First 50 TB**: $0.023 per GB

- **Availability:** 99.99% (AWS SLA)- **GET requests**: $0.0004 per 1,000 requests

- **PUT requests**: $0.005 per 1,000 requests

---

#### DynamoDB

<div align="center">- **On-demand**: $1.25 per million write requests

- **On-demand**: $0.25 per million read requests

**[View CI/CD Pipeline API Project →](../cicd-pipeline)** | **[Portfolio](https://yourportfolio.com)** | **[LinkedIn](https://linkedin.com/in/yourprofile)**- **Storage**: $0.25 per GB-month



![AWS](https://skillicons.dev/icons?i=aws)#### Rekognition

- **Image analysis**: $1.00 per 1,000 images

**Built with** ![Node.js](https://skillicons.dev/icons?i=nodejs) **on** ![AWS](https://skillicons.dev/icons?i=aws) **Lambda**- **Object detection**: $1.00 per 1,000 images



**⭐ Star this repository if you find it helpful!**### Estimated Monthly Costs



</div>| Usage Level | Requests | Estimated Cost |

|-------------|----------|----------------|
| **Development** | 1,000 | $0.00 (Free Tier) |
| **Small** | 10,000 | $0.50 - $1.00 |
| **Medium** | 100,000 | $5.00 - $10.00 |
| **Large** | 1,000,000 | $50.00 - $100.00 |

### Cost Optimization Tips

1. **Use S3 Lifecycle Policies**
   - Move old images to S3 Glacier
   - Delete thumbnails after 30 days

2. **DynamoDB TTL**
   - Automatically delete old metadata
   - Reduces storage costs

3. **Lambda Memory Optimization**
   - Right-size memory allocation
   - Use Lambda Power Tuning

4. **Reserved Concurrency**
   - For predictable workloads
   - Reduces cold starts

5. **CloudWatch Log Retention**
   - Set appropriate retention periods
   - Use Log Insights efficiently

---

## Monitoring

### CloudWatch Dashboards

```bash
# View Lambda metrics
aws cloudwatch get-metric-statistics \
  --namespace AWS/Lambda \
  --metric-name Duration \
  --dimensions Name=FunctionName,Value=UploadFunction \
  --start-time 2025-10-13T00:00:00Z \
  --end-time 2025-10-13T23:59:59Z \
  --period 3600 \
  --statistics Average
```

### Key Metrics

- **Lambda Duration**: Average, P95, P99
- **Lambda Errors**: Error rate, throttles
- **API Gateway**: Request count, latency, 4xx/5xx errors
- **DynamoDB**: Read/write capacity, throttles
- **S3**: Request count, data transfer
- **SQS**: Messages sent, received, visible

### CloudWatch Alarms

Automatic alarms for:
- Lambda function errors > 5% in 5 minutes
- API Gateway 5xx errors > 10 in 5 minutes
- DynamoDB throttled requests > 0
- SQS DLQ message count > 0
- Lambda concurrent executions > 80% of limit

### X-Ray Tracing

```bash
# View service map
aws xray get-service-graph \
  --start-time $(date -d '1 hour ago' +%s) \
  --end-time $(date +%s)

# View traces
aws xray get-trace-summaries \
  --start-time $(date -d '1 hour ago' +%s) \
  --end-time $(date +%s)
```

### Logging

```bash
# View Lambda logs
sam logs -n UploadFunction --tail

# View all function logs
aws logs tail /aws/lambda/serverless-image-api-UploadFunction --follow

# Query logs
aws logs filter-log-events \
  --log-group-name /aws/lambda/serverless-image-api-UploadFunction \
  --filter-pattern "ERROR"
```

---

## Troubleshooting

### Common Issues

#### Issue: SAM CLI Not Found

```bash
# Install SAM CLI
# Windows (Chocolatey)
choco install aws-sam-cli

# Mac (Homebrew)
brew install aws-sam-cli

# Verify installation
sam --version
```

#### Issue: AWS Credentials Not Configured

```bash
# Configure credentials
aws configure

# Or set environment variables
export AWS_ACCESS_KEY_ID=your_key
export AWS_SECRET_ACCESS_KEY=your_secret
export AWS_DEFAULT_REGION=us-east-1

# Verify
aws sts get-caller-identity
```

#### Issue: Deployment Fails

```bash
# Check CloudFormation events
aws cloudformation describe-stack-events \
  --stack-name serverless-image-api \
  --query 'StackEvents[?ResourceStatus==`CREATE_FAILED`]'

# View detailed error
sam deploy --debug
```

#### Issue: API Returns 403 Forbidden

**Cause**: Invalid or missing API key

**Solution**:
```bash
# Get new API key
aws apigateway get-api-keys --include-values

# Use correct header
curl -H "x-api-key: CORRECT_KEY" ...
```

#### Issue: Lambda Function Timeout

**Cause**: Processing large images

**Solution**:
- Increase Lambda timeout in `template.yaml`
- Increase memory allocation
- Optimize image processing code

```yaml
ProcessFunction:
  Timeout: 60  # Increase from 30
  MemorySize: 1024  # Increase from 512
```

#### Issue: S3 Upload Fails

**Cause**: Pre-signed URL expired

**Solution**:
- Pre-signed URLs expire after 1 hour
- Generate a new upload URL
- Upload within expiration time

#### Issue: DynamoDB Throttling

**Cause**: Exceeded provisioned capacity

**Solution**:
- Switch to on-demand billing mode
- Enable auto-scaling
- Batch write operations

---

### Performance Tuning

#### Lambda Cold Starts

```yaml
# Add provisioned concurrency
ProvisionedConcurrencyConfig:
  ProvisionedConcurrentExecutions: 2
```

#### Image Processing Speed

```javascript
// Optimize Sharp settings
sharp(buffer)
  .resize(800, 600, {
    fit: 'inside',
    withoutEnlargement: true
  })
  .jpeg({ quality: 80, progressive: true })
```

#### API Response Time

- Enable API Gateway caching
- Use CloudFront CDN for images
- Optimize DynamoDB queries with GSI

---

## Security Best Practices

- ✅ API Gateway with API keys
- ✅ IAM least privilege policies
- ✅ S3 bucket encryption (AES-256)
- ✅ DynamoDB encryption at rest
- ✅ Pre-signed URLs with expiration
- ✅ CloudWatch Logs encryption
- ✅ VPC integration for sensitive data
- ✅ AWS Secrets Manager for secrets
- ✅ Regular security audits
- ✅ Automated vulnerability scanning

---

<div align="center">

**Powered by AWS Serverless**

![AWS Services](https://skillicons.dev/icons?i=aws,nodejs,dynamodb)

MIT License

</div>

#!/bin/bash

# Build the Next.js application
echo "Building the application..."
npm run build

# Configure AWS credentials (replace with your values)
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_DEFAULT_REGION="your-region"

# S3 bucket name (replace with your bucket name)
S3_BUCKET="your-bucket-name"

# CloudFront distribution ID (replace with your distribution ID)
CF_DISTRIBUTION_ID="your-distribution-id"

# Sync the build directory to S3
echo "Uploading files to S3..."
aws s3 sync out/ s3://$S3_BUCKET/ --delete

# Invalidate CloudFront cache
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $CF_DISTRIBUTION_ID --paths "/*"

echo "Deployment completed!" 
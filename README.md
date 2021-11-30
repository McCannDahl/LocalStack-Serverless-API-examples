# LocalStack-Serverless-API-examples
LocalStack Serverless API examples that actually work

## Getting Started
1. install LocalStack
2. install LocalStack Serverless
4. `cd 1 - minimal example`
3. `docker-compose up`
4. `serverless deploy --stage local`
5. `awslocal apigateway get-rest-apis`
6. http://localhost:4566/restapis/<REST API ID>/local/_user_request_/myendpointpath
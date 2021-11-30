# LocalStack-Serverless-API-examples
LocalStack Serverless API examples that actually work

![image](https://user-images.githubusercontent.com/19883817/143978438-fc5f505a-330a-4ef6-a5bc-7dd9015e1ce6.png)

## Getting Started
1. install [LocalStack](https://docs.localstack.cloud/get-started/)
2. install [LocalStack Serverless](https://github.com/localstack/serverless-localstack)
4. `cd 1 - minimal example`
3. `docker-compose up`
4. `serverless deploy --stage local`
5. `awslocal apigateway get-rest-apis`
6. http://localhost:4566/restapis/--RestApiId--/local/_user_request_/myendpointpath

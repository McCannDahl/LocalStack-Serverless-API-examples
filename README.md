# LocalStack-Serverless-API-examples
LocalStack Serverless API examples that actually work

![image](https://user-images.githubusercontent.com/19883817/143978438-fc5f505a-330a-4ef6-a5bc-7dd9015e1ce6.png)

## Getting Started
1. install [LocalStack](https://docs.localstack.cloud/get-started/)
2. install [LocalStack Serverless](https://github.com/localstack/serverless-localstack)
3. got to first directory `cd 1 - minimal example`
4. install loacalstack serverless node package `npm i`
5. in one terminal spin up container `docker-compose up`\
6. in another terminal deploy the serverless stack `serverless deploy --stage local`

## Validating results
7. To see if the api is up and running `awslocal apigateway get-rest-apis` should return 1 item
8. Going to this URL in the brower with the correct restAPIid from the previous step `http://localhost:4566/restapis/--RestApiId--/local/_user_request_/myendpointpath` will yeld a json result with `{ "message": "Go Serverless v1.0! Your function executed successfully!".....`
9. Try this curl command `curl http://localhost:4566/restapis/--RestApiId--/local/_user_request_/myendpointpath`

## DynamoDB
- `cd 2 - api gateway with dynamoDB`
Repeat steps 4-6
- Try this curl command `curl -X get http://localhost:4566/restapis/3t34ugy0cj/local/_user_request_/animals`
- Or this one `curl -X post http://localhost:4566/restapis/3t34ugy0cj/local/_user_request_/animals -H "Content-Type: application/json" -d '{"name": "bob", "age": 100, "family": "dahl"}' `

## Auth
- `cd 3 - auth`
Repeat steps 4-6
- Try this curl command `curl -X post --user admin:secret http://localhost:4566/restapis/--RestApiId--/local/_user_request_/basicAuth`

## Other helpful commands
- list lambdas `awslocal lambda list-functions`
- list iam roles `awslocal iam list-roles`
- get policy `awslocal lambda get-policy --function-name apidynamo-local-getAnimals`

'use strict';



const AWS = require("aws-sdk")

// URI and other properties could be load by ENV Vars or by property file (.env)
AWS.config.update({
  //region: "us-west-2",
  endpoint: "host.docker.internal:4566"
  });

const db = new AWS.DynamoDB.DocumentClient();
const TableName = process.env.TABLE_NAME;

module.exports.create = async event => {
  const newAnimal = {
    name: event.body.name,
    age: event.body.age,
    family: event.body.family,
  }

  await db
    .put({
      TableName,
      Item: newAnimal,
    })
    .promise()

  return { statusCode: 200, body: JSON.stringify(newAnimal) }
}
module.exports.list = async event => {
  const animals = await db
    .scan({
      TableName,
    })
    .promise()

  return { statusCode: 200, body: JSON.stringify(animals) }
}
module.exports.delete = async event => {
  const animalToBeRemovedName = event.pathParameters.name

  await db
    .delete({
      TableName,
      Key: {
        name: animalToBeRemovedName,
      },
    })
    .promise()

  return { statusCode: 200 }
}

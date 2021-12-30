'use strict';


class Person {
  constructor(username) {
    this.username = username;
  }
}

function getPerson(authorizationHeader) {
  if (!authorizationHeader) return null

  var encodedCreds = authorizationHeader.split(' ')[1]
  var plainCreds = (new Buffer(encodedCreds, 'base64')).toString().split(':')
  var username = plainCreds[0]
  var password = plainCreds[1]
  console.log('Username = '+username+' password = ' + password);

  if (!(username === 'admin' && password === 'secret')) return null

  return new Person(username);
}

module.exports.basicAuth = async event => {
  var person = getPerson(event.headers.authorization);
  if (!person) {
    return { statusCode: 401, body: 'UNAUTHORIZED'};
  }
  return { statusCode: 200, body: {'Token':'refreshtoken12321312413'}};
}

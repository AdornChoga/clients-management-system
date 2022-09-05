const request = require('supertest');
const app = require('../server');

describe('Authentication', () => {
  describe('login', () => {
    describe('given email and password are valid', () => {
      // request content-type should be application/json
      // response status should be 200
      // cookie should be set on the response object
      // response body should be json
      test('should respond with status 200', () => {});
      test('should respond with json object', () => {});
    });
    describe('given email and password are invalid', () => {
      // email is invalid
      // request body type should be json
      // response status should be 402
      // there should be no cookie set on the response object
      // response body should be json
      // password is invalid
      // request body type should be json
      // response status should be 402
      // there should be no cookie set on the response object
      // response body should be json
    });
    describe('given email and password are missing', () => {
      // email is missing
      // request body type should be json
      // response status should be 400
      // there should be no cookie set on the response object
      // response body should be json
      // password is missing
      // request body type should be json
      // response status should be 400
      // there should be no cookie set on the response object
      // response body should be json
    });
  });
  describe('logout', () => {
    test('given there are no issues with the request', () => {});
  });
});

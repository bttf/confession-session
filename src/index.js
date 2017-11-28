const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./domain/schema');
const rootValue = require('./app/fetchLogic');

const app = express();

app.use('/', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

app.listen(3000);

console.log('listening on 3000');

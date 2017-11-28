const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./domain/schema');
const rootValue = require('./rootResolver');

app.use('/', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

app.listen(3000);

console.log('listening on 3000');

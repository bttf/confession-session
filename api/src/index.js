const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(3000);

console.log('listening on 3000');

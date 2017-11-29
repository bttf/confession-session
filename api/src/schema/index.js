const {
  GraphQLSchema,
} = require('graphql');
const query = require('./types/Query');
const mutation = require('./types/Mutation.js');

module.exports = new GraphQLSchema({
  query,
  mutation,
});

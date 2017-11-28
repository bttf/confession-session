const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');
const {
  ConfessionType,
  ConfessionPayloadType,
} = require('./Confession');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    confession: { type: ConfessionType },
  },
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    confession: { type: ConfessionPayloadType },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

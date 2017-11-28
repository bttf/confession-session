const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} = require('graphql');
const ConfessionType = require('./Confession');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    confession: {
      type: ConfessionType,
      description: 'A single confession',
      args: {
        id: {
          type: GraphQLString,
        },
      },
    },

    confessions: {
      type: new GraphQLList(ConfessionType),
      description: 'A list of confessions',
    },
  },
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    newConfession: {
      type: ConfessionType,
      args: {
        body: { type: GraphQLString },
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

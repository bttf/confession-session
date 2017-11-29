const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const ConfessionType = require('./Confession');
const getConfessions = require('../../resolvers/getConfessions');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    confessions: {
      type: new GraphQLList(ConfessionType),
      description: 'All confessions, matching filters',
      args: {
        id: { type: GraphQLString },
      },
      resolve: getConfessions,
    },
  },
});

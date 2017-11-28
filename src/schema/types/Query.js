const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const ConfessionType = require('./Confession');
const getConfession = require('../../resolvers/getConfession');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    confession: {
      type: ConfessionType,
      description: 'A single confession',
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: getConfession,
    },

    confessions: {
      type: new GraphQLList(ConfessionType),
      description: 'A list of confessions',
    },
  },
});

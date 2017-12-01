const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const ConfessionType = require('./Confession');
const createConfession = require('../../resolvers/createConfession.js');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    newConfession: {
      type: ConfessionType,
      args: {
        body: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: createConfession,
    },
  },
});


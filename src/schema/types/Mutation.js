const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const ConfessionType = require('./Confession');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    newConfession: {
      type: ConfessionType,
      args: {
        body: { type: GraphQLString },
      },
    },
  },
});


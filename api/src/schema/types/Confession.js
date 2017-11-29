const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = require('graphql');

const ConfessionType = new GraphQLObjectType({
  name: 'Confession',
  description: 'An anonymous confession',
  fields: {
    id: {
      type: GraphQLID,
      description: 'Unique, numeric id',
    },
    hash: {
      type: GraphQLString,
      description: 'Cryptographically-secure hash of IP address',
    },
    body: {
      type: GraphQLString,
      description: 'Text of confession',
    },
    created: {
      type: GraphQLString,
      description: 'Date and time when created',
    },
  },
});

module.exports = ConfessionType;

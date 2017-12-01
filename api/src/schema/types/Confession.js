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
    body: {
      type: GraphQLString,
      description: 'Text of confession',
    },
    date_created: {
      type: GraphQLString,
      description: 'Date and time when created',
    },
  },
});

module.exports = ConfessionType;

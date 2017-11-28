const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = require('graphql');

// read
const ConfessionType = new GraphQLObjectType({
  name: 'Confession',
  fields: {
    id: { type: GraphQLID },
    hash: { type: GraphQLString },
    body: { type: GraphQLString },
    created: { type: GraphQLString },
  },
});

// write
const ConfessionPayloadType = new GraphQLObjectType({
  name: 'ConfessionPayload',
  fields: {
    body: { type: GraphQLString },
  },
});

module.exports = {
  ConfessionType,
  ConfessionPayloadType,
};

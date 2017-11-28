/**
 * The methods on this exported object correlate directly with the fields
 * defined for the query/mutation schemas in domain/schema.js.
 */
module.exports = {
  confession({ id }) {
    return {
      id: "1234",
      body: "Some confession",
    };
  },

  confessions() {
    return [{
      id: "1234",
      body: "Confession #1",
    }, {
      id: "1235",
      body: "Confession #2",
    }];
  },

  newConfession({ body }) {
    return {
      id: "1234",
      body,
    }
  },
};

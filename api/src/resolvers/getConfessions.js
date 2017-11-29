module.exports = (_root, { id = null }) => {
  if (id) {
    return [{
      id,
      body: 'hey, hey were the monkays',
    }];
  }

  return [{
    id: '1234',
    body: 'whats up',
  }, {
    id: '555',
    body: 'yo yo',
  }];
};

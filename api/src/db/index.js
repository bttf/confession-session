const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
  query(text) {
    return pool.query(text);
  },
};

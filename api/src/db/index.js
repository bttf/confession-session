const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: 'mysecretpassword',
  port: 5432,
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
});

module.exports = {
  query(text, callback) {
    return client.query(text, callback);
  },
};

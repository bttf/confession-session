const db = require('../db');

module.exports = async (_root, { id = null }) => {
  const query = id ?
    db.query(`SELECT * FROM "confessions" WHERE "id"=${id}`) :
    db.query(`SELECT * FROM "confessions" ORDER BY "date_created" DESC`);
  const response = await query;
  return response.rows.map(confession => ({
    id: confession.id,
    body: confession.body,
    // why doesn't this show up
    date_created: confession.date_created.toString(),
  }));
};

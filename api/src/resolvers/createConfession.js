const db = require('../db');

module.exports = async (_root, { body }) => {
  const response = await db.query(`
    INSERT INTO "confessions" (body)
    VALUES ('${body}')
    RETURNING "id"
  `);

  return {
    id: response.rows[0].id,
    body,
  };
};

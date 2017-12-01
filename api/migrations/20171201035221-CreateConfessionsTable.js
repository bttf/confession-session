'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('confessions', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      body: 'string',
      date_created: { type: 'datetime', defaultValue: new String('now()') },
    },
    ifNotExists: true,
  }, callback);
};

exports.down = function(db) {
  db.dropTable('confessions');
};

exports._meta = {
  "version": 1
};

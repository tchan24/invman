const pgp = require('pg-promise')();
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'tarun',
  user: 'postgres',
  password: 'admin'
};
const db = pgp(connection);
module.exports = db;

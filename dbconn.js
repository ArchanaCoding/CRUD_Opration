const pgp = require('pg-promise')();


const conn = "postgres://postgres:postgres@localhost:5432/postgres"

const db = pgp(conn)

module.exports = db;
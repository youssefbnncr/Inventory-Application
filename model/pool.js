require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
    connectionString: `postgresql://${USERNAME}:${PASSWORD}@localhost:5432/${DATABASE_NAME}`
});

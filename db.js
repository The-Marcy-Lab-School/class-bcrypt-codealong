const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'reubenogbonna',
  database: 'friend_tracker',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

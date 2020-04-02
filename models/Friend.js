const db = require('../db');

class Friend {
  static getAll() {
    const queryText = 'SELECT * FROM friends';
    return db.query(queryText);
  }

  static add(name, age) {
    const queryText = `INSERT INTO friends (name, age)
                       VALUES ($1, $2);`;
    return db.query(queryText, [name, age]);
  }
}

module.exports = Friend;

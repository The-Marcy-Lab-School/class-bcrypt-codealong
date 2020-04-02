const db = require('../db');

class Admin {
  static add(email, password) {
    const queryText = `INSERT INTO admins (email, password)
    VALUES ($1, $2);`;
    return db.query(queryText, [email, password]);
  }

  static getByEmail(email) {
    const queryText = 'SELECT * FROM admins WHERE email=$1';
    return db.query(queryText, [email])
      .then((data) => data[0]);
  }
}

module.exports = Admin;

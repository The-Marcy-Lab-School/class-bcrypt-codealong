const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

const authorize = (req, res) => {
  const { email, password } = req.body;

  const saltRounds = 8;
  bcrypt.hash(password, saltRounds)
    .then((hashedPassword) => {
      console.log('Hashed Password: ', hashedPassword);
      Admin.add(email, hashedPassword);
    })
    .then(() => res.status(201).send('Admin account created.'))
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

const authenticate = (req, res, next) => {
  const { email, password } = req.body;
  Admin.getByEmail(email)
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password)
          .then((result) => {
            if (result) {
              next();
            } else {
              res.status(403).send('Unauthorized User');
            }
          });
      } else {
        res.status(403).send('Unauthorized User');
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = {
  authorize,
  authenticate,
};

const Friend = require('../models/Friend');

const getAllFriends = (req, res) => {
  Friend.getAll()
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const addFriend = (req, res) => {
  const { name, age } = req.body;
  Friend.add(name, age)
    .then(() => Friend.getAll())
    .then((data) => res.json(data.rows))
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = {
  getAllFriends,
  addFriend,
};

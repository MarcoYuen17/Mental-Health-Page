const userRouter = require('express').Router();
const User = require('../models/user');

userRouter.post('/create', (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({
    username: username,
    password: password,
  });

  newUser
    .save()
    .then(() => res.json(`User with username ${username} added`))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

userRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username, password })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = userRouter;
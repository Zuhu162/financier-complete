const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

//Register
router.post("/register", async (req, res) => {
  let newUser = await User.findOne({ username: req.body.username });
  if (newUser)
    return res.status(400).send(`An account with this username already exists`);

  try {
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    newUser = await user.save();

    const token = user.generateAuthToken();
    res.send(token);
  } catch (err) {
    res.send(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Invalid username or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Invalid username or password");

  const token = user.generateAuthToken();
  res.send(token);
});

module.exports = router;

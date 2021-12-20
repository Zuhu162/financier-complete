const router = require("express").Router();
const auth = require("../middleware/auth");
const currentUser = require("../middleware/currentUser");
const User = require("../models/User");

router.get("/", async (req, res) => {
  const users = await User.find().select("-password");

  try {
    res.status(200).send(users);
  } catch (err) {
    res.send(err);
  }
});

router.get("/me", async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.get("/:_id", async (req, res) => {
  try {
    const users = await User.findById(req.params._id).select("-password");
    res.status(200).send(users);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:_id/get", async (req, res) => {
  try {
    const users = await User.findById(req.params._id).find({
      finances: {
        income: 2000,
        lastmonth: 500,
      },
    });
    res.status(200).send(users);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id/set", async (req, res) => {
  const user = await User.findById(req.params.id);
  try {
    const updated = await user.updateOne({ $set: req.body });
    res.status(200).send(updated);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.put("/:id/add", async (req, res) => {
  const user = await User.findById(req.params.id);
  try {
    const updated = await user.updateOne({ $push: req.body });
    res.status(200).send(updated);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/:id/remove", async (req, res) => {
  const user = await User.findById(req.params.id);
  try {
    const updated = await user.updateOne({ $pull: req.body });
    res.status(200).send(updated);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

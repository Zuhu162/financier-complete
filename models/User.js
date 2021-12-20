const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const financesSchema = new mongoose.Schema({
  income: {
    type: Number,
  },
  lastMonth: {
    type: Number,
  },
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  username: {
    type: String,
    required: true,
    min: 4,
    max: 20,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  income: {
    type: Number,
  },
  finances: {
    type: financesSchema,
  },
  Education: {
    type: [itemSchema],
  },
  MISC: {
    type: [itemSchema],
  },
  Utility: {
    type: [itemSchema],
  },
  Entertainment: {
    type: [itemSchema],
  },
  OneTime: {
    type: [itemSchema],
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, username: this.username },
    config.get("jwtPrivateKey")
  );
  return token;
};

module.exports = mongoose.model("Users", userSchema);

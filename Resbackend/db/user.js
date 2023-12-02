const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // name: {
  //   type: String,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  // },
  // password: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model("users", userShema);

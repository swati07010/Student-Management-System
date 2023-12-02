const mongoose = require("mongoose");

const detailsShema = new mongoose.Schema({
  name: String,
  rollno: String,
  section: String,
  branch: String,
  mobile: String,
  fathername: String,
  address: String,
  collagename: String,
});
module.exports = mongoose.model("details", detailsShema);

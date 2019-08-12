const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  firstname: { type: String, required: true},
  lastname: { type: String, required: true},
  phonenumber: { type: Number, required: true},
  username: { type: String, required: true},
  password: { type: String, required: true},
  date: { type: Date, default: Date.now}
});

const SignUp = mongoose.model("SignUp", SignUpSchema);

module.exports = SignUp;
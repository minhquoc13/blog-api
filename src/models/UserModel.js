// models/User.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  role: { type: String, default: "user" },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  mobile: { type: String },
  password: { type: String, required: true },
  isBlocked: { type: Boolean, default: false },
  refreshToken: { type: String },
  passwordResetExpired: { type: Date },
  passwordResetToken: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
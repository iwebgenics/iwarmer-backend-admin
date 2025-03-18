// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    permissions: {
      "email warmup": { type: Boolean, default: false },
      "email track": { type: Boolean, default: false },
      "add employees": { type: Boolean, default: false },
      "emails score": { type: Boolean, default: false },
      "generate key": { type: Boolean, default: false },
      "modify permissions": { type: Boolean, default: false }
    }
  },
  { collection: "users" } // Use the "users" collection
);

module.exports = mongoose.model("User", userSchema);

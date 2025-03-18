// models/admin.js
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
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
}, { collection: "admin" }); // This physically references the admin collection in MongoDB

module.exports = mongoose.model("admin", AdminSchema);

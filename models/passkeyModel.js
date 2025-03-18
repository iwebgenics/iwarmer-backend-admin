// models/passkey.js
const mongoose = require("mongoose");

const passkeySchema = new mongoose.Schema(
  {
    passkey: { type: String, required: true, unique: true },
    is_used: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    used_at: { type: Date } // set this when the passkey is activated
  },
  { collection: "keys" } // same collection name as your Python code: "keys_collection"
);

module.exports = mongoose.model("keys", passkeySchema);

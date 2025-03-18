// models/emailsCount.js
const mongoose = require("mongoose");

const EmailsCountSchema = new mongoose.Schema({
  email: { type: String },
  spam_count: { type: Number, default: 0 },
  // Add any other fields as needed
}, { collection: "emails_count" }); // Use the exact same collection name

module.exports = mongoose.model("emails_count", EmailsCountSchema);

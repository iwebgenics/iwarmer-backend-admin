// models/emailsList.js
const mongoose = require("mongoose");

const EmailsListSchema = new mongoose.Schema({
  email: { type: String },
  sent_count: { type: Number, default: 0 },
  bounced_count: { type: Number, default: 0 },
  failed_count: { type: Number, default: 0 },
  spam_count: { type: Number, default: 0 },
  reply_count: { type: Number, default: 0 },
  starting_date: { type: Date },
  end_date: { type: Date },
  status: { type: Boolean, default: false }
}, { collection: "emailslist" });

module.exports = mongoose.model("emailslist", EmailsListSchema);

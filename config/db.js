// db.js
const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://imailerapp:QU7Rby9NwOz7C8KC@cluster0.oqpmq.mongodb.net/EmailAutomation?retryWrites=true&w=majority&appName=Cluster0";

// Connect to the EmailAutomation database exactly as in your Python file
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected."))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

module.exports = mongoose.connection;

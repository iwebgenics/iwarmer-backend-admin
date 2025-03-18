// server.js
const express = require("express");
const cors = require("cors");
require("./config/db"); // Establish MongoDB connection

// Route imports
const employeeRoutes = require("./routes/employeeRoutes");
const modifyPermissionsRoutes = require("./routes/modifyPermissionsRoutes");
const passkeyRoutes = require("./routes/passkeyRoutes");
const userRoutes = require("./routes/userRoutes");
const emailStatsRoutes = require("./routes/emailStatsRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// Mount routes
app.use("/api/employee", employeeRoutes);
app.use("/api/permissions", modifyPermissionsRoutes);
app.use("/api/passkey", passkeyRoutes);
app.use("/api/user", userRoutes);
app.use("/api/stats", emailStatsRoutes);
app.use("/api/auth", authRoutes);

// Add a route to print SMS
app.get("/", (req, res) => {
    res.send("SMS: Server is running");
});

const PORT = process.env.PORT || 5007;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

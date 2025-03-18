// routes/passkeyRoutes.js
const express = require("express");
const { generatePasskey, activatePasskey } = require("../controllers/passkeyController");
const router = express.Router();

// Generate a new passkey
router.post("/generate", generatePasskey);

// Activate passkey
router.post("/activate", activatePasskey);

module.exports = router;

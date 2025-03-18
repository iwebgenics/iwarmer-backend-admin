// controllers/passkeyController.js
const { v4: uuidv4 } = require("uuid");
const Keys = require("../models/passkeyModel");

// Generates a new passkey & stores it in the "keys" collection
exports.generatePasskey = async (req, res) => {
  try {
    let passkey;
    let existing;

    // Keep generating new UUIDs until we find one that doesn't exist
    do {
      passkey = uuidv4();
      existing = await Keys.findOne({ passkey });
    } while (existing);

    // Insert into MongoDB, same as Python
    await Keys.create({
      passkey,             // random UUID
      is_used: false,      // initially unused
      created_at: new Date() // store creation time
    });

    return res.json({
      success: true,
      passkey
    });
  } catch (error) {
    console.error("Error generating passkey:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Activates the application by setting "is_used = true" and "used_at"
exports.activatePasskey = async (req, res) => {
  try {
    const { passkey } = req.body;
    if (!passkey) {
      return res.status(400).json({ error: "Passkey is required." });
    }

    // Look for an unused passkey
    const keyDoc = await Keys.findOne({ passkey, is_used: false });
    if (!keyDoc) {
      return res.status(400).json({ error: "Invalid or already used passkey!" });
    }

    // Mark it as used, just like Python
    keyDoc.is_used = true;
    keyDoc.used_at = new Date();
    await keyDoc.save();

    return res.json({
      success: true,
      message: "Activation successful!"
    });
  } catch (error) {
    console.error("Error activating passkey:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

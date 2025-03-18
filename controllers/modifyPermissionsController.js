// controllers/modifyPermissionsController.js
const Admin = require("../models/admin");

exports.updatePermissions = async (req, res) => {
  try {
    const { email, newPermissions } = req.body;
    if (!email) return res.status(400).json({ error: "Employee email is required." });
    const result = await Admin.updateOne(
      { email },
      { $set: { permissions: newPermissions } }
    );
    if (result.matchedCount) {
      res.json({ message: "Permissions updated successfully." });
    } else {
      res.status(404).json({ error: "Employee not found." });
    }
  } catch (error) {
    console.error("Error in updatePermissions:", error);
    res.status(500).json({ error: "Server error" });
  }
};

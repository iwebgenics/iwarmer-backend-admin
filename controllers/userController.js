// controllers/userController.js
const bcrypt = require("bcrypt");
const AdminModel = require("../models/admin"); 

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and password required." });
    
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "Invalid email or password." });
    
    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(400).json({ error: "Invalid email or password." });
    
    res.json({
      message: `Welcome, ${user.name}!`,
      user: { name: user.name, permissions: user.permissions || {} }
    });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ error: "Server error" });
  }
};


// GET all 'users' (which are actually admins in the 'admin' collection)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await AdminModel.find({});
    return res.json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users (from admin collection):", error);
    return res.status(500).json({ error: "Server error" });
  }
};

// DELETE a 'user' by ID (again, from 'admin' collection)
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await AdminModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.json({ success: true, message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user (from admin collection):", error);
    return res.status(500).json({ error: "Server error" });
  }
};
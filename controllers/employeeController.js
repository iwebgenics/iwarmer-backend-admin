// employeeController.js
const bcrypt = require("bcrypt");
const Admin = require("../models/admin");

exports.addEmployee = async (req, res) => {
  try {
    const { name, email, password, permissions } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email, and password are required." });
    }

    // Check if an employee with this email already exists
    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "An employee with this email already exists." });
    }

    // Hash the password before storing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new admin document
    const newEmployee = new Admin({
      name,
      email,
      password: hashedPassword,
      permissions // This object should follow the same keys as defined in the model
    });

    await newEmployee.save();
    res.json({ message: `Employee '${name}' added successfully!` });
  } catch (error) {
    console.error("Error in addEmployee:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// 1) GET all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Admin.find({});
    return res.json({ success: true, employees });
  } catch (error) {
    console.error("Error fetching employees:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

// 2) DELETE an employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      return res.status(404).json({ error: "Employee not found." });
    }

    return res.json({ success: true, message: "Employee deleted successfully." });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return res.status(500).json({ error: "Server error" });
  }
};
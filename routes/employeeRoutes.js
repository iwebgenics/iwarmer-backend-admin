// employeeRoutes.js
const express = require("express");
const { addEmployee, getAllEmployees,
    deleteEmployee, } = require("../controllers/employeeController");
const router = express.Router();

router.get("/", getAllEmployees);
router.post("/", addEmployee);
router.delete("/:id", deleteEmployee);


module.exports = router;

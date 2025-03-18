// routes/userRoutes.js
const express = require("express");
const { loginUser, getAllUsers, deleteUser } = require("../controllers/userController");
const router = express.Router();

// Existing login route
router.post("/login", loginUser);

// 1) GET /api/user -> get all users
router.get("/", getAllUsers);

// 2) DELETE /api/user/:id -> delete user
router.delete("/:id", deleteUser);

module.exports = router;

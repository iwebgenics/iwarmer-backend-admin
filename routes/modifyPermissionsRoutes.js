// modifyPermissionsRoutes.js
const express = require("express");
const { updatePermissions } = require("../controllers/modifyPermissionsController");
const router = express.Router();

router.post("/", updatePermissions);

module.exports = router;

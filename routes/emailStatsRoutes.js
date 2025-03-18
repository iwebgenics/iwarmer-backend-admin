// routes/emailStatsRoutes.js
const express = require("express");
const { getStatsByDate } = require("../controllers/emailStatsController");
const router = express.Router();

// POST /api/stats/date
router.post("/date", getStatsByDate);

module.exports = router;

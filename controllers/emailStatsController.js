// controllers/emailStatsController.js
const EmailsList = require("../models/emailsList");

exports.getStatsByDate = async (req, res) => {
  try {
    const { date } = req.body;
    if (!date) {
      return res.status(400).json({ error: "Date is required." });
    }

    // Parse the incoming date, e.g. "2023-03-01"
    const startDate = new Date(date);
    // Create an end date = start date + 1 day
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 1);

    // Query the 'emailslist' collection for items with a starting_date
    // within [startDate, endDate)
    const records = await EmailsList.find({
      starting_date: {
        $gte: startDate,
        $lt: endDate
      }
    });

    // Transform each record to match your Python structure
    const mapped = records.map((r) => ({
      email: r.email || "N/A",
      sent: r.sent_count || 0,
      failed: r.failed_count || 0,
      bounced: r.bounced_count || 0,
      spam: r.spam_count || 0,
      reply: r.reply_count || 0
    }));

    return res.json({
      success: true,
      records: mapped
    });
  } catch (error) {
    console.error("Error in getStatsByDate:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

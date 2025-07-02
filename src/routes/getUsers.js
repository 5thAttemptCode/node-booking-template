const express = require("express")
const router = express.Router()
const pool = require("../config/db")


router.get("/users", async (req, res) => {
  console.log("Received GET /appointments/users");
  try {
    const result = await pool.query("SELECT * FROM users");
    console.log("Query result:", result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router
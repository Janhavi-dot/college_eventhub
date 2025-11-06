const express = require("express");
const router = express.Router();
const db = require("../db");

// Homepage: List Events
router.get("/", (req, res) => {
  db.query("SELECT * FROM events ORDER BY event_date DESC", (err, events) => {
    if (err) return res.status(500).send("Database Error");
    res.render("home", { events });
  });
});

// Display form
router.get("/add", (req, res) => {
  res.render("addEvent");
});

// Handle form submit
router.post("/add", (req, res) => {
  const { title, description, event_date, image } = req.body;

  db.query(
    "INSERT INTO events (title, description, event_date, image) VALUES (?,?,?,?)",
    [title, description, event_date, image],
    (err) => {
      if (err) return res.status(500).send("Insert Error");
      res.redirect("/");
    }
  );
});

module.exports = router;

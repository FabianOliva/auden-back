const express = require("express");
const router = express.Router();
const songController = require("../controllers/songController.js");

//HOME
router.get("/", (req, res) => {
  res.send("AUDEN HOME");
});

module.exports = router;

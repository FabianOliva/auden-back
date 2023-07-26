const express = require("express");
const router = express.Router();

//HOME
router.get("/", (req, res) => {
  res.send("AUDEN HOME");
});

module.exports = router;

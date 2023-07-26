const express = require("express");
const router = express.Router();

//USERS
router.get("/", (req, res) => {
  res.send("Users");
});

module.exports = router;

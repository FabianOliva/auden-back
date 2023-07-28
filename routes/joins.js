const express = require("express");
const router = express.Router();
const joinController = require("../controllers/joinsController");

router.get("/", joinController.getSongJoinArtist);

module.exports = router;

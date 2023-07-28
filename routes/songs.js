const express = require("express");
const router = express.Router();
const songController = require("../controllers/songController.js");

//SONG

//TRAER TODAS LAS SONGS
router.get("/", songController.getSongs);

//TRAER 1 SONG / SONG
router.get("/:song_Id", songController.getSong);

module.exports = router;

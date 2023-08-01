const express = require("express");
const router = express.Router();

const playlistController = require("../controllers/playlistController.js");

router.get("/", playlistController.getPlaylists);

router.get("/:playlist_Id", playlistController.getPlaylist);

router.get("/songs/:playlist_Id", playlistController.getPlaylistSongs);

router.post("/", playlistController.createPlaylistController);

module.exports = router;

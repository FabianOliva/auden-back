const express = require("express");
const router = express.Router();

const albumController = require("../controllers/albumController.js");

//TRAER TODOS LOS ALBUMS
router.get("/", albumController.getAlbums);

//TRAER 1 USER / USERNAME
router.get("/:album_Id", albumController.getAlbum);

module.exports = router;

const express = require("express");
const router = express.Router();
const joinsModel = require("../models/joinsModel");

//--------------------GET SONG - SONG_ID-------------------/
const getSongJoinArtist = async (req, res) => {
  try {
    const joinSongAndArtist = await joinsModel.getSongJoinArtistModel();
    res.status(200).send(joinSongAndArtist);
  } catch (error) {
    res.status(400).send("Error al traer artistas y canciones", error);
  }
};
module.exports = { getSongJoinArtist };

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

//--------------------GET ALBUM AND ARTIST INFO-------------------/
const getAlbumJoinArtist = async (req, res) => {
  try {
    const data = await albumModels.getAlbumJoinArtistModel();
    res.send(data);
  } catch {
    res.status(500).send("Error al traer albums");
  }
};
module.exports = { getSongJoinArtist, getAlbumJoinArtist };

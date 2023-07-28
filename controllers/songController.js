const express = require("express");
const router = express.Router();
const songModel = require("../models/songModel.js");

//--------------------GET SONG - SONG_ID-------------------/
const getSong = async (req, res) => {
  try {
    const song_Id = req.params.song_Id;
    const song = await songModel.getSongModel(song_Id);
    res.send(song);
  } catch {
    res.status(500).send("No se pudo traer la canción, quizas no exista.");
  }
};

//-------------------GET ALL SONGS-------------------/
const getSongs = async (req, res) => {
  try {
    const songs = await songModel.getSongsModel();
    res.send(songs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al traer canciones");
  }
};

module.exports = { getSong, getSongs };

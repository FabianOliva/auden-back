const express = require("express");
const router = express.Router();
const albumModels = require("../models/albumModel.js");

//-------------------GET ALL ALBUMS-------------------/
const getAlbums = async (req, res) => {
  try {
    const albums = await albumModels.getAlbumsModel();
    res.send(albums);
  } catch {
    res.status(500).send("Error al traer albums");
  }
};

//--------------------GET ALBUM-------------------/
const getAlbum = async (req, res) => {
  try {
    const album_Id = req.params.album_Id;
    const album = await albumModels.getAlbumModel(album_Id);
    res.send(album);
  } catch {
    res.status(500).send("No se pudo traer el album, quizas no exista.");
  }
};

module.exports = { getAlbums, getAlbum };

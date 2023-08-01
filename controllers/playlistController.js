const express = require("express");
const playlistModel = require("../models/playlistModel.js");

const getPlaylist = async (req, res) => {
  try {
    const playlist_Id = req.params.playlist_Id;
    const playlist = await playlistModel.getPlaylistModel(playlist_Id);
    res.send(playlist);
  } catch {
    res.status(500).send("No se pudo traer la playlist, quizas no exista.");
  }
};

const getPlaylists = async (req, res) => {
  try {
    const playlists = await playlistModel.getPlaylistsModel();
    res.send(playlists);
  } catch {
    res.status(500).send("error al traer playlist");
  }
};

const getPlaylistSongs = async (req, res) => {
  try {
    const playlist_Id = req.params.playlist_Id;
    const playlistSongs = await playlistModel.getPlaylistSongs(playlist_Id);
    res.send(playlistSongs);
  } catch {
    res.status(500).send("No se pudo traer la playlist, quizas no exista.");
  }
};

const createPlaylistController = async (req, res) => {
  const { user_id, playlist_name, songs } = req.body;

  const playlistData = {
    user_id,
    playlist_name,
    songs,
  };

  console.log("Data recibida en el controlador:", playlistData);

  try {
    await playlistModel.createPlaylistModel(playlistData); // Llamada a la función createPlaylistModel
    res.status(200).json({ message: "Playlist creada exitosamente" });
  } catch (error) {
    console.error("Error en el controlador:", error);
    res.status(500).json({ message: "Error al crear la playlist" });
  }
};

module.exports = { getPlaylist, getPlaylists, getPlaylistSongs, createPlaylistController };

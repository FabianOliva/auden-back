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

module.exports = { getPlaylist, getPlaylists, getPlaylistSongs };

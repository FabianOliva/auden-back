//MODELS- INTERACTUAR CON LA BASE DE DATOS
const db = require("../services/database");

//GET USER
const getPlaylistModel = async (playlist_Id) => {
  return await db.select().from("playlist").where("playlist_id", playlist_Id);
};

//GET ALL USERS
const getPlaylistsModel = async () => {
  return await db.select().from("playlist");
};

//-------------------CREATE PLAYLIST-------------------/

module.exports = {
  getPlaylistModel,
  getPlaylistsModel,
};

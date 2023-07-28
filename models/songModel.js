//MODELS- INTERACTUAR CON LA BASE DE DATOS
const db = require("../services/database");

//GET SONG
const getSongModel = async (song_Id) => {
  return await db.select().from("song").where("song_id", song_Id);
};

//GET ALL USERS
const getSongsModel = async () => {
  return await db.select().from("song");
};

module.exports = {
  getSongModel,
  getSongsModel,
};

//MODELS- INTERACTUAR CON LA BASE DE DATOS
const db = require("../services/database");

//GET PLAYLIST
const getPlaylistModel = async (playlist_Id) => {
  return await db.select().from("playlist").where("playlist_id", playlist_Id);
};

//GET ALL USERS
const getPlaylistsModel = async () => {
  return await db.select().from("playlist");
};

const getPlaylistSongs = async (playlist_Id) => {
  return await db
    .select(
      "s.song_id",
      "s.album_id",
      "s.artist_id",
      "s.song_name",
      "s.song_duration",
      "s.song_image_url",
      "s.song_audio",
      "s.song_genre",
      "ar.artist_name"
    )
    .from("song as s")
    .join("artist as ar", "s.artist_id", "ar.artist_id")
    .leftJoin("playlist_song as ps", "s.song_id", "ps.song_id")
    .where("ps.playlist_id", playlist_Id);
};

//-------------------CREATE PLAYLIST-------------------/

module.exports = {
  getPlaylistModel,
  getPlaylistsModel,
  getPlaylistSongs,
};

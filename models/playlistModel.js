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
const createPlaylistModel = async (playlistData) => {
  console.log("Data recibida en el modelo:", playlistData);

  // Insertar en la tabla "playlist" y obtener el "playlist_id" generado
  const [playlistIdObj] = await db("playlist").returning("playlist_id").insert({
    user_id: playlistData.user_id,
    playlist_name: playlistData.playlist_name,
  });

  const playlistId = playlistIdObj.playlist_id;

  // Crear un array de objetos para insertar en "playlist_song"
  const playlistSongs = playlistData.songs.map((songId) => ({
    playlist_id: playlistId,
    song_id: songId,
  }));

  console.log("Data de las canciones a insertar:", playlistSongs);

  // Insertar las canciones en la tabla "playlist_song"
  await db("playlist_song").insert(playlistSongs);
};

module.exports = {
  getPlaylistModel,
  getPlaylistsModel,
  getPlaylistSongs,
  createPlaylistModel,
};

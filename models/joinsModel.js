//MODELS- INTERACTUAR CON LA BASE DE DATOS
const db = require("../services/database");

//GET SONGS AND ARTIST
const getSongJoinArtistModel = async () => {
  return await db
    .select("song.*", "artist.artist_name")
    .from("song")
    .join("artist", "song.artist_id", "artist.artist_id");
};

//GET ALBUM AND ARTIST
const getAlbumJoinArtistModel = async () => {
  return await db
    .select("album.*", "artist.*")
    .from("album")
    .join("artist", "album.artist_id", "artist.artist_id");
};

module.exports = {
  getSongJoinArtistModel,
  getAlbumJoinArtistModel,
};

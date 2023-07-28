const db = require("../services/database");

//GET ALBUM
const getAlbumModel = async (album_Id) => {
  return await db.select().from("album").where("album_id", album_Id);
};

//GET ALL ALBUMS
const getAlbumsModel = async () => {
  return await db.select().from("album");
};

module.exports = {
  getAlbumModel,
  getAlbumsModel,
};

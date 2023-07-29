//MODELS- INTERACTUAR CON LA BASE DE DATOS
const db = require("../services/database");

//GET USER
const getUserModel = async (username) => {
  return await db.select().from("users").where("user_username", username);
};

//GET ALL USERS
const getUsersModel = async () => {
  return await db.select().from("users");
};

//CREATE USER
const createUserModel = async (userData) => {
  return await db("users").insert({
    user_username: userData.username,
    user_password: userData.userpassword,
    user_email: userData.useremail,
  });
};

//UPDATE USER
const updateUser = async (username, userNewData) => {
  return await db("users").where("user_username", username).update({
    user_username: userNewData.username,
    user_password: userNewData.userpassword,
    user_email: userNewData.useremail,
  });
};

//DELETE USER
const deleteUser = async (username) => {
  return await db("users").where("user_username", username).del();
};

//GET USER INFO
const getUserInfoModel = async (username) => {
  return await db
    .select("u.user_id", "u.user_name", "u.user_username", "u.user_email", "p.playlist_id", "p.playlist_name")
    .from("users as u")
    .leftJoin("playlist as p", "u.user_id", "p.user_id")
    .where("u.user_username", username);
};

const getUserPlaylistsModel = async (username) => {
  return await db
    .select(
      "u.user_id",
      "u.user_name",
      "u.user_username",
      "u.user_email",
      "p.playlist_id",
      "p.playlist_name",
      "s.song_id",
      "s.song_name",
      "s.song_image_url"
    )
    .from("users as u")
    .leftJoin("playlist as p", "u.user_id", "p.user_id")
    .leftJoin("playlist_song as ps", "p.playlist_id", "ps.playlist_id")
    .leftJoin("song as s", "ps.song_id", "s.song_id")
    .where("u.user_username", username);
};

module.exports = {
  getUsersModel,
  createUserModel,
  getUserModel,
  updateUser,
  deleteUser,
  getUserInfoModel,
  getUserPlaylistsModel,
};

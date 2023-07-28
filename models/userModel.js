//MODELS- INTERACTUAR CON LA BASE DE DATOS
const db = require("../services/database");

//GET USER
const getUserModel = async (username) => {
  return await db.select().from("users").where("user_name", username);
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
  return await db("users").where("user_name", username).update({
    user_name: userNewData.username,
    user_password: userNewData.userpassword,
    user_email: userNewData.useremail,
  });
};

//DELETE USER
const deleteUser = async (username) => {
  return await db("users").where("user_name", username).del();
};

//GET USER INFO
const getUserInfoModel = async (username) => {
  return await db
    .select("u.user_id", "u.user_name", "u.user_username", "u.user_email", "p.playlist_id", "p.playlist_name")
    .from("users as u")
    .leftJoin("playlist as p", "u.user_id", "p.user_id")
    .where("u.user_name", username);
};

module.exports = {
  getUsersModel,
  createUserModel,
  getUserModel,
  updateUser,
  deleteUser,
  getUserInfoModel,
};

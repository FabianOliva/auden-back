// MODELS- INTERACTUAR CON LA BASE DE DATOS
const db = require("../services/database");

// OBTENER USUARIO
const getUserModel = async (user_username) => {
  return await db.select().from("users").where("user_username", user_username);
};

// OBTENER TODOS LOS USUARIOS
const getUsersModel = async () => {
  return await db.select().from("users");
  
};

// CREAR USUARIO
const createUserModel = async (userData) => {
  return await db("users").insert({
    user_username: userData.user_username,
    user_password: userData.user_password,
    user_email: userData.user_email,
  });
};

// ACTUALIZAR USUARIO
const updateUser = async (user_username, userNewData) => {
  return await db("users").where("user_username", user_username).update({
    user_username: userNewData.username,
    user_password: userNewData.userpassword,
    user_email: userNewData.useremail,
  });
};

// ELIMINAR USUARIO
const deleteUser = async (user_username) => {
  return await db("users").where("user_username", user_username).del();
};

module.exports = {
  getUsersModel,
  createUserModel,
  getUserModel,
  updateUser,
  deleteUser,
};

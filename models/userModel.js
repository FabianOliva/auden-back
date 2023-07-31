// MODELS- INTERACTUAR CON LA BASE DE DATOS
const db = require("../services/database");
const knex = require("../services/database");


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
// const updateUser = async (user_username, userNewData) => {
//   return await db("users").where("user_username", user_username).update({
//     user_username: userNewData.username,
//     user_password: userNewData.userpassword,
//     user_email: userNewData.useremail,
//   });
// };

const updateUser = async (username, userNewData) => {
  try {
    const { user_username, user_password, user_email } = userNewData;

    // Verificar si el usuario existe antes de actualizar
    const user = await knex("users").where("user_username", username).first();
    if (!user) {
      throw new Error("El usuario no existe.");
    }

    // Construir el objeto con los datos a actualizar
    const updateData = {};
    if (user_username) {
      updateData.user_username = user_username;
    }
    if (user_password) {
      updateData.user_password = user_password;
    }
    if (user_email) {
      updateData.user_email = user_email;
    }

    // Realizar la actualización del usuario
    await knex("users").where("user_username", username).update(updateData);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateUser,
};


// ELIMINAR USUARIO
const deleteUser = async (user_username) => {
  return await db("users").where("user_username", user_username).del();
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

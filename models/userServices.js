const db = require("../services/database");

//GET ALL USERS

const getUsersService = async () => {
  return await db.select().from("users");
};

//CREATE USER
const createUserService = async (userData) => {
  return await db("users").insert({
    user_username: userData.username,
    user_password: userData.userpassword,
    user_email: userData.useremail,
  });
};

module.exports = { getUsersService, createUserService };

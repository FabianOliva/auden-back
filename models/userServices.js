const db = require("../services/database");

//GET ALL USERS

const getUsersService = async () => {
  return await db.select().from("users");
};

module.exports = { getUsersService };

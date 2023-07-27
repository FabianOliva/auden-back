const express = require("express");
const router = express.Router();
const userModels = require("../models/userServices.js");

//USERS
router.get("/", (req, res) => {
  res.send("Users");
});

//GET USERS
const getUsers = async (req, res) => {
  try {
    const users = await userModels.getUsersService();
    res.send(users);
    console.log(users);
  } catch {
    res.status(500).send("error al traer ususarios");
  }
};

module.exports = { getUsers };

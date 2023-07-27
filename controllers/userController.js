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
  } catch {
    res.status(500).send("error al traer ususarios");
  }
};

//CREATE USER
const createUser = async (req, res) => {
  try {
    const userData = {
      username: "prueba1",
      userpassword: "password1",
      useremail: "email1@gmial.com",
    };
    await userModels.createUserService(userData);
    res.status(200).send("usuario creado");
  } catch {
    res.status(500).send("no se pudo crear el usuario");
  }
};

module.exports = { getUsers, createUser };

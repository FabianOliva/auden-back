//CONTROLLER- MANEJAR SOLICITUDES HTTP Y MANDAR RESP AL CLIENTE
const express = require("express");
const router = express.Router();
const userModels = require("../models/userModel.js");
const verifyUserExistence = require("../middlewares/userMiddleweares.js");

//--------------------GET USER - USERNAME-------------------/
const getUser = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await userModels.getUserModel(username);
    res.send(user);
  } catch {
    res.status(500).send("No se pudo traer el usuario, quizas no exista.");
  }
};
//-------------------GET ALL USERS-------------------/
const getUsers = async (req, res) => {
  try {
    const users = await userModels.getUsersModel();
    res.send(users);
  } catch {
    res.status(500).send("error al traer ususarios");
  }
};

//-------------------CREATE USER-------------------/
const createUser = async (req, res) => {
  try {
    const userData = {
      username: "prueba2",
      userpassword: "password1",
      useremail: "email2@gmial.com",
    };
    await userModels.createUserModel(userData);
    res.status(200).send("usuario creado");
  } catch {
    res.status(500).send("no se pudo crear el usuario");
  }
};

//-------------------UPDATE USER-------------------/
const updateUser = async (req, res) => {
  try {
    const username = req.params.username;
    const userNewData = {
      username: "pruebamiddleweare4",
      userpassword: "password1",
      useremail: "emailupdate4@gmail.com",
    };

    // Verificar la existencia del usuario utilizando el middleware
    verifyUserExistence(req, res, async () => {
      try {
        // Si el usuario existe, req.foundUser contendrá la información del usuario
        await userModels.updateUser(username, userNewData);
        res.status(200).send("usuario actualizado");
      } catch {
        res.status(500).send("no se pudo actualizar el usuario");
      }
    });
  } catch {
    res.status(500).send("error en el servidor");
  }
};

//-------------------DELETE USER-------------------/
const deleteUser = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await userModels.deleteUser(username);
    res.status(200).send("Se ha eliminado el usuario");
  } catch {
    res.status(500).send("No se pudo eliminar el usuario, quizas no exista.");
  }
};

module.exports = { getUser, getUsers, createUser, updateUser, deleteUser };

// Importamos las dependencias necesarias
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const userModels = require("../models/userModel.js");

const verifyUserExistence = require("../middlewares/userMiddleweares.js");

// Controlador para obtener un usuario
const getUser = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await userModels.getUserModel(username);
    res.send(user);
  } catch {
    res.status(500).send("No se pudo obtener el usuario, quizás no exista.");
  }
};

// Controlador para obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await userModels.getUsersModel();
    res.send(users);
  } catch {
    res.status(500).send("Error al obtener usuarios");
  }
};

// Controlador para crear un usuario
const createUser = async (req, res) => {
 // try {
    const { user_username, user_userpassword, user_email } = req.body;
    const hashedPassword = await bcrypt.hash(user_userpassword, 10);

    console.log(hashedPassword);


    const userData = {
      user_username,
      user_password: hashedPassword,
      user_email,
    };

   // console.log(userData);

    const newUser = await userModels.createUserModel(userData);
    res.status(200).json({ message: "Usuario creado", user: newUser });
  //} catch {
   // res.status(500).send("No se pudo crear el usuario");
  //}
};

// Controlador para actualizar un usuario
const updateUser = async (req, res) => {
  try {
    const username = req.params.username;
    const userNewData = req.body;
    await userModels.updateUser(username, userNewData);
    res.status(200).send("Usuario actualizado");
  } catch {
    res.status(500).send("No se pudo actualizar el usuario");
  }
};

// Controlador para eliminar un usuario
const deleteUser = async (req, res) => {
  try {
    const username = req.params.username;
    await userModels.deleteUser(username);
    res.status(200).send("Usuario eliminado");
  } catch {
    res.status(500).send("No se pudo eliminar el usuario, quizás no exista.");
  }
};

// Controlador para iniciar sesión
const loginUser = async (req, res) => {
  try {
    console.log(req.body);
    const { user_username, user_userpassword } = req.body; 
    console.log("Logging in user: ", user_username);

    const user = await userModel.getUserModel(user_username);
    console.log("Found user: ", user);

    if (!user || user.length === 0) {
      console.log("User not found");
      return res.status(404).json({ mensaje: "Credenciales Invalidad." });
    }
    console.log('user_userpassword:', user_userpassword);
    console.log('user[0].user_password:', user[0].user_password);
    const passwordMatch = await bcrypt.compare(user_userpassword, user[0].user_password);
    console.log("Password match: ", passwordMatch);

    if (passwordMatch) {
      const payload = {
        user: {
          id: user[0].id,
          name: user[0].user_username
        }
      };
  
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: "2d"
        },
        (err, token) => {
          if (err) throw err;
          res.json({ email: user[0].user_email, name: user[0].user_username, token });
        }
      );
    } else {
      console.log("Password does not match");
      res.status(401).send("Usuario o contraseña incorrectas");
    }
  } catch (error) {
    console.log("Server error: ", error);
    res.status(500).send("Error en el servidor");
  }
};

module.exports = { getUser, getUsers, createUser, updateUser, deleteUser, loginUser };

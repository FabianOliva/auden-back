const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require("../models/userModel.js");

// Función para generar el token
const generateToken = (user) => {
  const payload = {
    userId: user.id, 
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Función middleware para verificar la existencia del usuario y la validez de la contraseña
const verifyUserExistence = async (req, res, next) => {
  const { user_username, user_password } = req.body;
 
    const user = await userModel.getUserModel(user_username);
    

    if (user.length>0) {
      return res.status(401).json({ mensaje: "El usuario ya existe." });
    }
    next();
};

module.exports = verifyUserExistence;

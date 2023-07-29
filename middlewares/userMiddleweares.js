// const jwt = require('jsonwebtoken');
// const userModel = require("../models/userModel.js");

// const generateToken = (user) => {
//   const payload = {
//     userId: user.id, 
//   };
//   return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
// };

// const verifyUserExistence = async (req, res, next) => {
//    const { user_username, user_password } = req.body;

//   try {
//     const user = await userModel.getUserModel(user_username);

//     if (!user || user.length === 0) {
//       return res.status(404).json({ mensaje: "El usuario o contraseña no encontrados." });
//     }

//     // LOGICA PARA VERIFICAR LA CONTRASEÑA
//     if (user && user.user_password === user_password) {
//       const token = generateToken(user);
//       // AGREGA EL TOKEN AL USUARIO
//       req.token = token;
//       next();
//     } else {
//       res.status(401).send("Usuario o contraseña incorrectas");
//     }
//   } catch (error) {
//     console.error("Error al verificar la existencia del usuario:", error);
//     return res.status(500).json({
//       mensaje: "Ocurrió un error al verificar la existencia del usuario.",
//     });
//   }
// };

// module.exports = verifyUserExistence;

// Importamos las dependencias necesarias
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

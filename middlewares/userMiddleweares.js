const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel.js");

// Función para generar el token
const generateToken = (user) => {
  const payload = {
    userId: user.id,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Función middleware para verificar la existencia del usuario y la validez de la contraseña
const verifyUserExistence = async (req, res, next) => {
  const { user_username, user_password } = req.body;

  const user = await userModel.getUserModel(user_username);

  if (user.length > 0) {
    return res.status(401).json({ mensaje: "El usuario ya existe." });
  }
  next();
};

//Verificar el Token
const verifyToken = (token) => {
  try {
    // Verifica el token usando el secret
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Si la verificación tiene éxito, el token es válido
    return decodedToken;
  } catch (error) {
    // Si hay un error en la verificación, el token no es válido
    return null;
  }
};

module.exports = { verifyUserExistence, generateToken, verifyToken };

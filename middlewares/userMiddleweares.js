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
  const { user_username, user_userpassword } = req.body;

  try {
    const user = await userModel.getUserModel(user_username);

    if (user.length > 0) {
      return res.status(401).json({ mensaje: "El usuario ya existe." });
    }

    // Validar que la contraseña tenga al menos 6 caracteres, una mayúscula y al menos un carácter especial
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(user_userpassword)) {
      return res.status(400).json({
        mensaje:
          "La contraseña debe tener al menos 6 caracteres, una mayúscula y al menos un carácter especial.",
      });
    }

    next();
  } catch (error) {
    console.error("Error al verificar el usuario:", error);
    res.status(500).send("Error en el servidor");
  }
};

//Verificar el Token

module.exports = { verifyUserExistence, generateToken };

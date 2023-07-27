//FUNCIONES INTERMEDIAS QUE SE EJECUTAN ANTES QUE EL CONTROLADOR PROCESE SOLICITUD
const userModel = require("../models/userModel.js");

//--------------------------VIERIFICAR SU USUARIO EXISTE----------------------/
const verifyUserExistence = async (req, res, next) => {
  const { username } = req.params;

  try {
    const user = await userModel.getUserModel(username);

    if (!user || user.length === 0) {
      return res.status(404).json({ mensaje: "El usuario no existe." });
    }
    next();
  } catch (error) {
    console.error("Error al verificar la existencia del usuario:", error);
    return res.status(500).json({
      mensaje: "Ocurrió un error al verificar la existencia del usuario.",
    });
  }
};

module.exports = verifyUserExistence;

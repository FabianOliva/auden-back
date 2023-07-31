const userModel = require("../models/userModel.js");

const verifyUserUpdate = async (req, res, next) => {
    const { user_password } = req.body;

    try {
        // Verificar si el usuario existe antes de actualizar
        const user = await userModel.getUserModel(req.params.username);
        if (user.length === 0) {
            return res.status(404).json({ mensaje: "El usuario no existe." });
        }

        // Validar que la contraseña tenga al menos 6 caracteres, una mayúscula y al menos un carácter especial
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (user_password && !passwordRegex.test(user_password)) {
            return res.status(400).json({ mensaje: "La contraseña debe tener al menos 6 caracteres, una mayúscula y al menos un carácter especial." });
        }

        next();
    } catch (error) {
        console.error("Error al verificar el usuario:", error);
        res.status(500).send("Error en el servidor");
    }
};

module.exports = verifyUserUpdate;

const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");
const verifyUserExistence = require("../middlewares/userMiddleweares.js");

//OBTENER TODOS LOS USUARIOS
router.get("/", userController.getUsers);

//OBTENER 1 USUARIO / NOMBRE DE USUARIO
router.get("/:username", userController.getUser);

//CREAR USUARIO
router.post("/register", verifyUserExistence, userController.createUser);

//ACTUALIZAR USUARIO
router.put("/:username", userController.updateUser);

//ELIMINAR USUARIO
router.delete("/:username", userController.deleteUser);

//INICIAR SESIÓN
router.post("/login", userController.loginUser);

module.exports = router;



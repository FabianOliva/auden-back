const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const userController = require("../controllers/userController.js");
const verifyUserExistence = require("../middlewares/userMiddleweares.js");

//OBTENER TODOS LOS USUARIOS
router.get("/", userController.getUsers);

//SHOW USER PLAYLIST INFO
router.get("/playlist", auth, userController.getUserPlaylists);

//OBTENER 1 USUARIO / NOMBRE DE USUARIO
router.get("/:username", userController.getUser);

//CREAR USUARIO
router.post("/register", userController.createUser);

//ACTUALIZAR USUARIO
router.put("/:username", userController.updateUser);

//ELIMINAR USUARIO
router.delete("/:username", userController.deleteUser);

//SHOW USER INFO
router.get("/account/:username", userController.getUserInfo);

//INICIAR SESIÓN
router.post("/login", userController.loginUser);
module.exports = router;

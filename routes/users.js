const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");
//Traer Usuarios
router.get("/", userController.getUsers);

//CREATE USER
router.post("/register", userController.createUser);
module.exports = router;

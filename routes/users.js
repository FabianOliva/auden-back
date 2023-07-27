const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");
//Traer Usuarios
router.get("/", userController.getUsers);
module.exports = router;

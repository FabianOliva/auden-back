const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");
//TRAER TODOS LOS USUSARIOS
router.get("/", userController.getUsers);

//TRAER 1 USER / USERNAME
router.get("/:username", userController.getUser);

//CREATE USER
router.post("/register", userController.createUser);

//UPDATE USER
router.put("/:username", userController.updateUser);

//DELETE USER
router.delete("/:username", userController.deleteUser);

module.exports = router;

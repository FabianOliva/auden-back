//Los servicios son módulos independientes que contienen lógica de negocio compleja y reutilizable
require("dotenv").config();
const knex = require("knex");
const knexFile = require("../knexfile");

const environment = process.env.NODE_ENV || "development";
const db = knex(knexFile[environment]);

// Define ANSI escape codes for colors
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
};

// Evento para verificar si la conexión se estableció correctamente
db.raw("SELECT 1")
  .then(() => {
    console.log(colors.green, "Conexión exitosa a la base de datos.");
    console.log(colors.reset); // Reset color to default
  })
  .catch((error) => {
    console.error(colors.red, "Error al conectar a la base de datos:", error);
    console.error(colors.reset); // Reset color to default
  });

module.exports = db;

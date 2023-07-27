const knex = require("knex");
const knexFile = require("../knexfile");

const environment = process.env.NODE_ENV || "development";

const db = knex(knexFile[environment]);

// Evento para verificar si la conexión se estableció correctamente
db.raw("SELECT 1")
  .then(() => {
    console.log("Conexión exitosa a la base de datos.");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

module.exports = db;

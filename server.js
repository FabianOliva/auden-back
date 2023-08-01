// Carga las variables de entorno desde el archivo .env
require("dotenv").config();

const express = require("express");
const app = express();
const { Pool } = require("pg");
const routes = require("./routes");
const users = require("./routes/users");
const songs = require("./routes/songs");
const playlist = require("./routes/playlist");
const albums = require("./routes/album");
const cors = require("cors");
const joins = require("./routes/joins");

const port = process.env.APP_PORT || 3000;

// Conexión a la base de datos online sin SSL y con sslmode=require
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Usamos directamente la variable de entorno DATABASE_URL
});

require("dotenv").config();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Ruta para comprobar la conexión a la base de datos
app.get("/", async (req, res) => {
  try {
    // Obtener un cliente desde el pool
    const client = await pool.connect();
    client.release();
    res.send("TAMOO CHELOO!");
  } catch (err) {
    console.error(err);
    res.send("Error connecting to the database: " + err);
  }
});

//HOME
app.use("/", routes);
//USERS
app.use("/users", users);
//SONGS
app.use("/songs", songs);
//playlist
app.use("/playlist", playlist);
//album
app.use("/album", albums);
//Joinis
app.use("/joins", joins);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});

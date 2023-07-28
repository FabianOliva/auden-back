const express = require("express");
const app = express();

const routes = require("./routes");
const users = require("./routes/users");
const songs = require("./routes/songs");
const playlist = require("./routes/playlist");
const albums = require("./routes/album");
const joins = require("./routes/joins");
const cors = require("cors");

require("dotenv").config();
const port = process.env.APP_PORT;
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

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
//JOINS
app.use("/joins", joins);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});

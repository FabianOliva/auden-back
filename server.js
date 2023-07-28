const express = require("express");
const app = express();

const routes = require("./routes");
const users = require("./routes/users");
const songs = require("./routes/songs");
const playlist = require("./routes/playlist");

require("dotenv").config();
const port = process.env.APP_PORT;
app.use(express.json());

//HOME
app.use("/", routes);
//USERS
app.use("/users", users);
//SONGS
app.use("/songs", songs);
//playlist
app.use("/playlist", playlist);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});

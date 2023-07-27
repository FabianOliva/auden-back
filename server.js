const express = require("express");
const app = express();

const routes = require("./routes");
const users = require("./routes/users");
require("dotenv").config();
const port = process.env.APP_PORT;
app.use(express.json());

//HOME
app.use("/", routes);
//USERS
app.use("/users", users);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT;

const routes = require("./routes");
const users = require("./routes/users");

app.use(express.json());
app.use("/", routes);
app.use("/users", users);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});

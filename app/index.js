const express = require("express");
// const axios = require("axios").default;
// const mysql = require("mysql");

const app = express();
const PORT = 3000;

const config = {
  host: "db",
  user: "root",
  password: "password",
  database: "nodedb",
};

app.get("/", (req, res) => {
  //   insertPeopleName(res);
  res.send("<h1>Full Cycle Rocks!</h1> <h3>cmrib</h3>");
});

app.listen(PORT, () => {
  console.log("running at " + PORT);
});

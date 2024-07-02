const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  const selectSql = `SELECT * FROM people`;

  connection.query(selectSql, (err, results) => {
    if (err) {
      return res.status(500).send("Database query failed");
    }

    const title = "<h1>Full Cycle Rocks!</h1>";
    const list = `
      <ul>
        ${results.map((p) => `<li>${p.name}</li>`).join("")}
      </ul>
    `;

    res.send(title + list);
  });
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);

  const createSql = `
    CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY (id));
  `;

  connection.query(createSql, (err) => {
    if (err) {
      console.error("Failed to create table:", err);
      return;
    }

    const insertSql = `
      INSERT INTO people (name) values ('Cicero Ribeiro'), ('Wesley Willians'), ('Full Cycle'), ('3.0');
    `;

    connection.query(insertSql, (err) => {
      if (err) {
        console.error("Failed to insert data:", err);
      }
    });
  });
});

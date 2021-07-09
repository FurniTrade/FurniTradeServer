const express = require('express');
const cors = require("cors");
const authRoutes = require('./Controllers/authentication.controllers');
const mysql = require('mysql');
const config = require('./Config/config');

const app = express();
const port = 4000;

let corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const connection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});

app.use('/auth', authRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to the FurniTrade server"); 
})

app.listen(port, () => {
    console.log("App is listening on port", port);
})

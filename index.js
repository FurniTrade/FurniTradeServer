const express = require('express');
const app = express();
const port = 4000;
const authRoutes = require('./Controllers/AuthenticationController');
const mysql = require('mysql');
require('dotenv').config()


const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'FurniTradeDB'
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

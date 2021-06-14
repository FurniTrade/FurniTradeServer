const express = require('express');
const app = express();
const port = 4000;
const authRoutes = require('./Controllers/AuthenticationController');

app.use('/auth', authRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to the FurniTrade server"); 
})

app.listen(port, () => {
    console.log("App is listening on port", port);
})

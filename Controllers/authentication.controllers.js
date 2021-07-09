const express = require('express'); 
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// different parsers needed
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/", (req, res) => {
    res.send("Welcome to auth controller");
})

router.post("/login", urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send("Login");
})

router.post("/signup", urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send("Signup");
})

module.exports = router; 
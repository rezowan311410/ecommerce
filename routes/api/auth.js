const express = require('express');
const _ = express.Router();
const user = require("../../models/user.js");

_.post('/registration', (req, res) => {
  let { email, password, phone, firstname, lastname } = req.body;

  const data = new user({
    email,
    password,
    phone,
    firstname,
    lastname
  });

  res.json(data);
});

_.get('/registration', (req, res) => {
  res.send('hello');
});

module.exports = _;

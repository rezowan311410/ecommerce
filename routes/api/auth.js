const express = require('express');
const _ = express.Router();

_.get('registration',()=>{
    res.json('ami api route');
})

module.exports = _ 
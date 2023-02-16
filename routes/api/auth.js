const express = require('express');
const _ = express.Router();

_.get('/registration',(req,res)=>{
    res.send('ami api route');
})

module.exports = _ 
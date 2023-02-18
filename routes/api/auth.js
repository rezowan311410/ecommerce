const express = require('express');
const _ = express.Router();

_.post('/registration',(req,res)=>{
    let {email,password,fullname}= req.body;

    if(!email){
        res.json("you must enter an email")
    }
    if(!password){
        res.json("you must enter an password")
    }
    if(!fullname){
        res.json("you must enter an fullname")
    }

    res.json({email,password,fullname});

})

module.exports = _ 
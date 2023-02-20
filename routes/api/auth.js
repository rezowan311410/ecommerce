const express = require('express');
const _ = express.Router();
const user = require("../../models/user.js");
_.post('/registration',(req,res)=>{
    let {email,password,phone,firstname,lastname}= req.body;

    // if(!email){
    //     res.json("you must enter an email")
    // }
    // if(!password){
    //     res.json("you must enter an password")
    // }
    // if(!phone){
    //     res.json("you must enter an fullname")
    // }

    const data = new user ({
                email,
                password,
                phone,
                firstname,
                lastname
                })

    res.json(data);

})

module.exports = _ 
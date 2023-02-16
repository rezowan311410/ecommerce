const express = require('express')
const apiRoutes = require("./api")
const _ = express.Router();

const api = process.env.Base_url;

_.use("api",apiRoutes);

_.use("api",(req,res)=>{
    res.json("No api found on this route")
})

module.exports = _

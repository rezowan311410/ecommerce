const express = require('express')
const chalk = require('chalk');
const app = express()

app.get('/', function (req, res) {
  res.json([
    {
        name:"rezowan"
    }
  ])
})

app.listen(7000,()=>{
    console.log(chalk.red("server connected"));
})
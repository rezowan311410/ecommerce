
const mongoose = require("mongoose");
const chalk = require('chalk');
const setupDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL,()=>{
        console.log(chalk.red("mongodb connected"));
    })
}

module.exports = setupDB;

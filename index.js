const express = require('express')
const chalk = require('chalk');
const cors = require('cors');
const app = express();
const userRouter = require("./routes/userRoutes")
//middle ware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.get('/', function (req, res) {
  res.json([
    {
        name:"rezowan"
    }
  ])
})

app.get('/test', function (req, res) {
  res.json([
    {
        name:"try another"
    }
  ])
})

app.use("/",userRouter);

app.listen(7000,()=>{
    console.log(chalk.red("server connected"));
})
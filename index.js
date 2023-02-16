require('dotenv').config()
const express = require('express')
const chalk = require('chalk');
const cors = require('cors');
const app = express();

const routes = require("./routes")
//middle ware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


// app.get('/', function (req, res) {
//   res.json([
//     {
//         name:"rezowan"
//     }
//   ])
// })
console.log(process.env.BASE_URL)
app.get('/test', function (req, res) {
  res.json([
    {
        name:"try another"
    }
  ])
})

app.use("/",routes);

app.listen(800,()=>{
    console.log(chalk.red("server connected"));
})
const dotenv = require('dotenv')
const express = require('express')
const app = express();
const cors = require('cors')


app.use(cors({
    origin:"http://localhost:3000",
}))

dotenv.config({path:'./config.env'});
require('./db/connect')

const User=require('./model/userSchema')
app.use(express.json())

//Routes to the pages
app.use(require('./router/auth'))




//Port on which the backend is running
app.listen(4000,()=>{
    console.log("Its working on port 4000")
})
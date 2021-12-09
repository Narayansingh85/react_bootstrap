const dotenv = require('dotenv')
const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
app.use(cookieParser());

app.use(cors({credentials:true,
    origin:"http://localhost:3000",
}))

// ------------------------------------------------------------------

require('./db/connect')

const User=require('./model/userSchema')
app.use(express.json())

// ------------------------------------------------------------------
//Routes to the pages
app.use(require('./router/auth'))


// ------------------------------------------------------------------


//Port on which the backend is running
app.listen(4000,()=>{
    console.log("Its working on port 4000")
})
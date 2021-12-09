const jwt = require('jsonwebtoken')
const User = require('../model/userSchema')
const config = require('../config/keys')


const loginMiddleware = async  (req,res,next) =>{
    try{
        const token = req.cookies.jwt
        const userVerified = jwt.verify(token,config.key)
        const user =  await User.findOne({_id:userVerified._id})
        next();

    }catch(err){
        res.status(401).send(err)
    }
}
module.exports = loginMiddleware
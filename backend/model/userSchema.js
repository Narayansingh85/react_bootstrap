const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    quali: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // tokens: [
    //     {
    //         token: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ]

})




//Encrypting Password

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next()
})

// Creating Token Schema
userSchema.methods.generateAuthToken = async function () {
    try {
        const token = await jwt.sign({ _id: this._id }, keys.key,{expiresIn:3600})
        // this.tokens = this.tokens.concat({ token: 'Bearer '+ token })
        // await this.save()
        console.log(token)
        return token;
    } catch (err) {
        console.log(err)
    }
}


// Collecting Creation
const User = mongoose.model('USER', userSchema)

module.exports = User;
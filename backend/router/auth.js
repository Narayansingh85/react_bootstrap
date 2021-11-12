const express = require("express")
const router = express.Router();
require('../db/connect')
const bcrypt = require('bcrypt')
const User = require('../model/userSchema')


router.get('/', async (req, res) => {
    try {
        const found = await User.find()
        res.set('Access-Control-Allow-Origin', '*');
        res.send(found)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/registration', async (req, res) => {
    const { fname, lname, email, quali, password } = req.body

    if (!fname || !lname || !email || !quali || !password) {
        res.status(422).json({ error: "Please fill all the entries" })
    }
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            res.status(422).json({ error: "Email Already Exist" })
        }
        else {
            const user = new User({ fname, lname, email, quali, password });

            // Encrypting Password Using Middleware

            const registered = await user.save()
            if (registered) {
                res.status(201).json({ message: "Registered Successfully" })
            } else {
                res.status(500).json({ error: "Failed To registered" });

            }
        }
    }
    catch (err) {
        res.status(500).json({ error: "Failed To registered" });

    }
})

// Login route
router.post('/login', async (req, res) => {
    try {
        req.header("Access-Control-Allow-Origin","*")
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "Plz fill all the fields" })
        } else {
            const found = await User.findOne({ email: email })

            //Matching Password
            if (found) {
                const match = await bcrypt.compare(password, found.password)
                if (!match) {
                    res.status(200).json({ error: "Invalid Credentials" })
                } else {
                    res.status(201).json({ message: "User Sign in Successfully",found:found })
                }
            }
            else {
                res.status(500).json({ error: "Invalid Credentials" })
            }
        }

    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
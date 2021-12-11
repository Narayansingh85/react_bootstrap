const express = require("express");
const router = express.Router();
require("../db/connect");
const bcrypt = require("bcrypt");
const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const loginMiddleware = require("../middleware/loginmiddleware");
const cookieParser = require("cookie-parser");
express().use(cookieParser());

// -------------------------------------------------------------------

// Getting route

router.get("/", async (req, res) => {
  try {
    const found = await User.find();
    res.set("Access-Control-Allow-Origin", "*");
    res.send(found);
  } catch (err) {
    console.log(err);
  }
});

// --------------------------------------------------------------------

// Registration Routes

router.post("/registration", async (req, res) => {
  const { fname, lname, email, quali, password } = req.body;

  if (!fname || !lname || !email || !quali || !password) {
    return res.status(401).json({ message: "Please fill all the entries" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ message: "Email Already Exist" });
    } else {
      const user = await new User({ fname, lname, email, quali, password });

      // Encrypting Password Using Middleware
      const registered = await user.save();
      if (registered) {
        return res.status(201).json({ message: "Registered Successfully" });
      } else {
        return res.status(500).json({ message: "Failed To registered" });
      }
    }
  } catch (err) {
    res.status(500).json({ error: "Failed To registered" });
  }
});

// ----------------------------------------------------------------------

// Login route

router.post("/login", async (req, res) => {
  req.header("Access-Control-Allow-Origin", "*");
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Plz fill all the fields" });
    }
    const found = await User.findOne({ email: email });

    // ***************************************

    //Matching Password

    if (found) {
      const match = await bcrypt.compare(password, found.password);

      const token = await found.generateAuthToken();

      //   Creating Cookie and Sign in
      // res.cookie("jwt", token, {
      //   expires: new Date(Date.now() + 3000),
      //   httpOnly: true,
      // });
      

      if (!match) {
        res.status(403).json({ error: "Invalid Credentials" });
      } else {
        res.status(201).json({
          message: "User Signed in Successfully",
          auth: true,
          found: found,
          token: token,
        });
      }
    } else {
      res.status(500).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// --------------------------------------------------------------

// Using Token go to main page

// router.get(
//   "/main",
//   (req, res) => {
//     console.log("After mid");
//     res.send({ message: "This is A mssg after using mid" });
//   }
// );

// ---------------------------------------------------------------

//Create the cookie

router.get("/cookie", (req, res) => {
  // req.header("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Origin", "*");

  res
    .status(201)
    .cookie("token", "333s", {
      path: "/cookie",
      expires: new Date(new Date().getTime() + 5 * 1000),
      httpOnly: false,
    })
    .send("Cookie is initialized");
});

module.exports = router;
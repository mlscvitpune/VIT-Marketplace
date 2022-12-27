// execute database connection
const dbConnect = require("./db/dbConnect");
dbConnect();
const User = require("./db/UserModel");

const express = require("express");
const app = express();

const cors = require("cors");

const jwt=require('jsonwebtoken');
const authMiddleware=require('./middleware/auth');
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 5000;

//public routes
app.post("/api/register", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({ user });
  } catch (error) {
    if (error.code === 11000) {
      console.log("email already exists");
      res.status(402).json({ error: "Email already exists!" });
    }
    console.log("error");
    res.status(400).json({ error: error.message });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      const token=jwt.sign({id:user._id,name:user.name,email:user.email},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10d'});
      res.status(200).json({token});
    } else {
      res.status(404).json({ error: "User not found!" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//private routes 
//(All the Routes below this are being authenticated by the middleware function. Therefore ,please provide the appropriate header while making request from the frontend. The format of the header should be as follows: headers:{"Authorization":"Bearer "+token} ) (The token is created when the user log's in and is stored in the localstorage.)
//(Upon successful authentication of a request the decoded token data is stored in req.user whose format is {id:"xyz",name:"xyz",email:"xyz"}).
//Hence the below routes will only work after logging in to an account. For now i have set the expiration dates of the token as 10 days.
app.use(authMiddleware);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

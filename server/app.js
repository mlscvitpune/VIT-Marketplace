// execute database connection 
const dbConnect = require("./db/dbConnect");
dbConnect(); 
const User = require("./db/UserModel");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 5000;

app.post("/api/register", async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
    });
    res.status(201).json({ user }); 
} catch (error) {
    if (error.code === 11000 ) {
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
            res.status(200).json({ user });
        }
        res.status(404).json({ error: "User not found!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

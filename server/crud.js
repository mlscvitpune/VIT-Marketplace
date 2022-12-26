const express = require("express");
const router = express.Router();

const Item = require("./db/ItemModel");

router.post("/create", async (req, res) => {
    try {
        const item = await Item.create({
            username: req.body.username,
            title: req.body.title,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity,
            description: req.body.description,
            images: req.body.images,
        });
        res.status(201).json({ item });
    } catch (error) {
        if (error.code === 11000) {
            console.log("item already exists");
            res.status(402).json({ error: "Item already exists!" });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
});



module.exports = router;
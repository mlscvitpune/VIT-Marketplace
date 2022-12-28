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

router.post("/read", async (req, res) => {
  if (!req.body.userprofile) {
    try {
      const items = await Item.find({}).exec();
      console.log(items);
      res.status(200).json({ items });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  } else {
    try {
      const items = await Item.find({
        username: req.body.username,
      });
      res.status(200).json({ items });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
});

router.post("/delete", async (req, res) => {
  try {
    const id = req.body.id;
    const result = await Item.deleteOne({
        _id: id
    })
    console.log(result)
    if (result.deletedCount === 1)
        res.status(200).json({message: "Item deleted"})
    else 
        res.status(404).json({message: error.message})

  } catch (error) {
    res.status(404).json({message: error.message})
  }
});

module.exports = router;

const mongoose = require("mongoose");
const { collection } = require("./UserModel");

const Item = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please provide your username"],
            unique: false,
        },
        title: {
            type: String,
            required: [true, "Please provide a title"],
            unique: true,
        },
        category: {
            type: String,
            required: [true, "Please provide a category"],
            unique: false,
        }, 
        price: {
            type: Number,
            required: [true, "Please provide the selling price"],
            unique: false,
        },
        quantity: {
            type: Number,
            required: [true, "Please provide the quantity of product"],
            unique: false,
        },
        description: {
            type: String,
            required: [true, "Please provide a description"],
            unique: false,
        },
        images: {
            type: Array,
            required: [false, "Please provide images of the product"],
            unique: false,
        }
    },
    {collection: "item-data"}
)

module.exports = mongoose.model("ItemData", Item);
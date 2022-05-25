const mongoose = require('mongoose');
//purpose of this file is to describe how our quotes table (collection) should look like


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Title must at least be 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0, "Nothing is free"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [7, "Description must at least be 7 characters"]
    },
},{timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
const mongoose = require('mongoose');
//purpose of this file is to describe how our quotes table (collection) should look like


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Name must at least be 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Type is required!"],
        minlength: [3, "Type must at least be 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must at least be 3 characters"]
    },
    skill1: {
        type: String,
        required: [false],
    },
    skill2: {
        type: String,
        required: [false],
    },
    skill3: {
        type: String,
        required: [false],
    },
},{timestamps: true});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
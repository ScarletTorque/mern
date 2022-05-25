const mongoose = require('mongoose');
//purpose of this file is to describe how our quotes table (collection) should look like


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required!"],
        minlength: [10, "Setup must at least be 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        minlength: [3, "Punchline must at least be 3 characters"]
    }
},{timestamps: true});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
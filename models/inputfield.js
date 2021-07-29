const mongoose = require('mongoose');

//schema for saving data of input field
const inputField = mongoose.Schema({
    name: {
        type: String,
    }
})

const input = mongoose.model("InputSchema", inputField)
module.exports = input;



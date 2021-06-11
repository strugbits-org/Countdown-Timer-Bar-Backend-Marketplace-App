//db connection
const mongoose = require("mongoose");
console.log("mongo connected")
mongoose.connect("mongodb+srv://timer:timer123@cluster0.jknr5.mongodb.net/test",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
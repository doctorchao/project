var mongoose = require("mongoose")
var book = new mongoose.Schema({
    title: String,
    author: String  
});
// var Kitten = mongoose.model('Kitten', kittySchema);
module.exports = mongoose.model("bookmodel",book)
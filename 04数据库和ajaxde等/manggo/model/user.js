var mongoose = require("mongoose")
var user = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avator: String,
});
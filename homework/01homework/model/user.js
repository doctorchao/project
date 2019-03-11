const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    email:{
        unique:true,
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"/Users/hskj/Desktop/超/homework/public/images/avatar1.jpg"
    }
},{
    versionKey:false,
    timestamps:{createdAt:"createtime",updatedAt:"updatatime"}
});
module.exports = mongoose.model("user", userSchema);

const mongoose = require ('mongoose')

const titlemodel = new mongoose.Schema({
    bookId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'book'
    },
    index:{
        type:Number,
        default:1
    },
    title:String,
    total:Number
},{versionKey:false,timestamps:{createdAt:'createTime',updatedAt:'updateTime'}})

module.exports = mongoose.model('title',titlemodel)
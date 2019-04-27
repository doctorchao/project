const mongoose = require ('mongoose')

const articlemodel = new mongoose.Schema({
    bookId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'book'
    },
    index:{
        type:Number,
        default:1
    },
    titleId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'title'
    },
    content:String,
},{versionKey:false,timestamps:{createdAt:'createTime',updatedAt:'updateTime'}})

module.exports = mongoose.model('article',articlemodel)
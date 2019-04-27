const mongoose = require('mongoose')

const bookmodel = new mongoose.Schema({
    title: String,
    img: String,
    type:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'category'
    },
    index:{
        type: Number,
        default:1
    },
    author:String,
    desc:String,
    looknums:{
        type:Number,
        default:0
    },
    total:{
        type:Number,
        default:0
    },
    startsnums:{
        type:Number,
        default:0
    }
}, {versionKey:false,timestamps:{createdAt:'createTime',updatedAt:'updateTime'}})

module.exports = mongoose.model('book',bookmodel)

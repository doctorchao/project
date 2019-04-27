const mongoose = require('mongoose')

const categoryModel = new mongoose.Schema({
    title:String,
    icon: String,
    books:[{ // 对数组中每一项进行定义
        type:mongoose.SchemaTypes.ObjectId,
        ref:'book'
    }],
    index:{
        type:Number,
        default:1
    },
    status:{
        type:Number,
        default:1
    }
},{versionKey: false,timestamps: {createdAt:'createTime',updatedAt:'updateTime'}})

module.exports = mongoose.model('category',categoryModel)
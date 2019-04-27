const mongoose = require ('mongoose')

const swiperModel = new mongoose.Schema({
    book:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'book'
    },
    index:{
        type:Number,
        default:1
    },
    img: String,
    status: {
        type: Number,
        default: 1
    },
    title: String
},{versionKey:false,timestamps:{createdAt:'createTime',updatedAt:'updateTime'}})

module.exports = mongoose.model('swiper',swiperModel)
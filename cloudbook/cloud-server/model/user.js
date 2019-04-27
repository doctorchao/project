const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    avatar: {
        type: String,
        default:'http://image.yaojunrong.com/zhenxiang.jpg'
    },
    phone: {
        type: String,
        unique: true
    },
    password: String,
    username: String,
    desc: {
        type: String,
        default: '请给我一个认识你的方式'
    }
    
},{versionKey: false, timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}})

module.exports = mongoose.model('user', userModel)
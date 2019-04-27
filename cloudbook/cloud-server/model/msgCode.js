const mongoose = require('mongoose')

const msgModel = new mongoose.Schema({
    phone: String,
    code: String,
},{versionKey: false, timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}})

module.exports = mongoose.model('msgCode', msgModel)

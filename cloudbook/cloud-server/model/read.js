const mongoose = require('mongoose')

const readModel = new mongoose.Schema({
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'book'
    },
    title: {
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'title'
    },
    user: {
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    index: {
        type: Number,
        default: 1
    },
    status: {
        type: Number,
        default: 1
    }
}, {versionKey:false,timestamps:{createdAt:'createTime',updatedAt:'updateTime'}})

module.exports = mongoose.model('read', readModel)
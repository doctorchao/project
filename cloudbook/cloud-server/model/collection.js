const mongoose = require('mongoose')

const collectionModel = new mongoose.Schema({
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'book'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    status: {
        type: Number,
        default: 1
    },
    index: {
        type: Number,
        default: 1
    }
}, {versionKey: false, timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}})

module.exports = mongoose.model('collection', collectionModel)

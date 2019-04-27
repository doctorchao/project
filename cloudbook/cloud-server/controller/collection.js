const colModel = require('../model/collection')
const mongoose = require('mongoose')

async function addCollection(req, res, next){
    try{
        const {userId} = req.user
        const {bookId} = req.body
        
        const collection = await colModel.findOne({
            book: mongoose.Types.ObjectId(bookId),
            user: mongoose.Types.ObjectId(userId)
        })
        if (collection){
            res.json({
                code: 200,
                msg: '你已经收藏过了，哥们',
            })
        } else{
            await colModel.create({
                book: mongoose.Types.ObjectId(bookId),
                user: mongoose.Types.ObjectId(userId)
            })
            res.json({
                code: 200,
                msg: '收藏成功'
            })
        }
    } catch(err){
        next(err)
    }
}
async function getCollection(req, res, next){
    try{
        const {userId} = req.user

        const data = await colModel.find({
            user: mongoose.Types.ObjectId(userId),
            status: 1
        }).populate({
            path: 'book'
        }).sort({_id: -1})
        res.json({
            code: 200,
            data,
            length: data.length
        })
    } catch(err){
        next(err)
    }
}
async function delCollection(req, res, next){
    try{
        const {userId} = req.user
        const {bookId} = req.body

        const collection = await colModel.remove({
            book: mongoose.Types.ObjectId(bookId),
            user: mongoose.Types.ObjectId(userId)
        })
        res.json({
            code: 200,
            msg: '取消收藏成功'
        })
    } catch(err){
        next(err)
    }
}

module.exports = {
    addCollection,
    getCollection,
    delCollection
}
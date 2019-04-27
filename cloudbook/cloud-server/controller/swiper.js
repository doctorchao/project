const swiperModel = require('../model/swiper')
const bookModel = require('../model/book')
const mongoose = require('mongoose')

async function addSwiper (req, res, next) {
    try {
        const {title, img, bookId, index = 1, status = 1} = req.body
        const swiper = await swiperModel.create({
            title,
            img,
            book: mongoose.Types.ObjectId(bookId),
            index,
            status
        })
        res.json({
            code: 200,
            msg: '添加轮播图成功'
        })
    } catch (err) {
        next(err)
    }
}
async function getSwiper (req, res, next) {
    try {
        let {pn = 1, size = 1} = req.query // 一个图分为一页 size为2就两个图一页
        pn = Number(pn)
        size = Number(size)
        const data = await swiperModel
        .find({status: 1})
        .populate({
            path: 'book'
        })
        .sort({index: 1, _id: 1})// 先按index排序 index一样的按id排
        .skip((pn-1)*size)
        .limit(size)

        res.json({
            code: 200,
            data
        })
    } catch (err) {
        next(err)
    }
}
async function updateSwiper (req, res, next) {
    try {
        const {id} = req.params
        const {index, title, img, status, bookId} = req.body
        const data = await swiperModel.updateOne({
            _id: mongoose.Types.ObjectId(id)
        }, {
            index,
            title,
            img,
            status,
            book: mongoose.Types.ObjectId(bookId)
        })
        res.json({
            code: 200,
            data,
            msg: '更新轮播图成功'
        })
    } catch (err) {
        next(err)
    }
}
module.exports = {
    addSwiper,
    getSwiper,
    updateSwiper
}
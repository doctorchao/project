const categoryModel = require('../model/category')
const bookModel = require('../model/book')
const mongoose = require('mongoose')

async function addCategory(req, res, next) {
    try{
        const{title, icon} = req.body
        await categoryModel.create({
            title,
            icon,
        })
        res.json({
            code: 200,
            msg: '添加分类成功'
        })
    } catch (err){
        next(err)
    }
}
async function getCategory(req, res, next) {
    try{
        const data = await categoryModel.find().sort({_id: 1})
        res.json({
            code: 200,
            msg: '获取分类成功',
            data
        })
    } catch (err){
        next(err)
    }
}
async function addBookToCategory(req, res, next) {
    try{
        const {categoryId,bookId} = req.body
        const category = await categoryModel.findOne({
            _id: mongoose.Types.ObjectId(categoryId)
        })
        const book = await bookModel.findOne({
            _id: mongoose.Types.ObjectId(bookId)
        })
        if(book){
            await category.books.push(book._id)//把bookId推入books
            await category.save()
            res.json({
                code: 200,
                msg: '分类添加书籍成功',
            })
        } else {
            res.json({
                code: 400,
                msg: '添加失败，该书籍不存在'
            })
        }
    } catch (err){
        next(err)
    }
}
async function getBookByCategory(req, res, next) {
    try{
        let {pn = 1, size = 1, booksSize = 1} = req.query
        pn = Number(pn)
        size = Number(size)
        booksSize = Number(booksSize)
        const data = await categoryModel.find().sort({_id: 1})
            .populate({
                path:'books',// 同时得到book集合中的数据
                options:{limit: booksSize}// 在book中获取数量
            })
            .skip((pn-1)*size)
            .limit(size)
        res.json({
            code: 200,
            msg: '获取分类书籍成功',
            data
        })
    } catch (err){
        next(err)
    }
}
async function getCategoryBooks(req, res, next) {
    try{
        const {id} = req.params
        let {pn = 1, size = 2} = req.query
        pn = Number(pn)
        size = Number(size)
        const data = await categoryModel.findOne({
            _id: mongoose.Types.ObjectId(id)
        }).populate({
            path:'books',
            options:{
                limit: size,
                skip: ((pn-1)*size),
                sort: {
                    _id: -1
                }
            }
        })
        res.json({
            code: 200,
            msg: '获取分类下所有书籍成功',
            data
        })
    } catch (err){
        next(err)
    }
}

module.exports = {
    addCategory,
    getCategory,
    addBookToCategory,
    getBookByCategory,
    getCategoryBooks
}
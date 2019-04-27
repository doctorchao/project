const mongoose = require('mongoose')
const readModel = require('../model/read')

async function getRead(req, res, next){
    try{
        const {userId} = req.user
        const data = await readModel.find({user: mongoose.Types.ObjectId(userId)})
            .sort({_id: -1})
            .populate({
                path: 'book'
            })
            .populate({
                path: 'title'
            })
            res.json({
                code: 200,
                msg: '获取阅读记录成功',
                data
            })
    } catch(err){
        next(err)
    }
}

module.exports = {
    getRead
}
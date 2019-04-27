const articelModel = require('../model/article')
const mongoose = require("mongoose")
const readModel = require('../model/read')
const jwt = require('jsonwebtoken')

function getVerify(token){
    // return new Promise((resolve, reject) => {
        let data1 = jwt.verify(token||'', 'ql', (err, data) => {
            // if(err){
            //     reject('')
            //     return
            // }
            // resolve(data.data)
                return data||''
            })
        return data1
//     })
}

async function getArticleById (req, res, next){
    try{
        const {id} = req.params
        let token = req.headers.token || req.body.token || req.query.token
        // 使用解构语法{token} = req.body ||...  body 和query 都无法得到token
        const userData = await getVerify(token)
        const data = await articelModel.findOne({// 得findone 不然返回是数组
            // 在前端还得用res.data[0]来取数据
            titleId: mongoose.Types.ObjectId(id)
            }).populate({
                path:'titleId'
            })
        if (userData.data){
            await readModel.updateOne({
                book: mongoose.Types.ObjectId(data.bookId),
                user: mongoose.Types.ObjectId(userData.data.userId)
            }, {$set:{title: mongoose.Types.ObjectId(id),book: mongoose.Types.ObjectId(data.bookId),user: mongoose.Types.ObjectId(userData.data.userId)}}, {upsert: true})
        }
        res.json({
            code:200,
            data
        })
    }catch (err) {
        next(err)
    }
}
module.exports = {
    getArticleById
}
const msgModel = require('../model/msgCode')
const userModel = require('../model/user')
// const mongoose = require('mongoose')
const {sendCode} = require('../utils/msgCode')
const validator = require('validator')

async function getCode(req, res, next) {
    try{
        const {phone} = req.body
        const phonestatus = validator.isMobilePhone(phone, 'zh-CN')
        if (phonestatus){
            const user = await userModel.findOne({phone})
            if (!user){
                let sixStr = ''
                for(let i = 0; i < 6; i++){
                    sixStr += Math.floor((Math.random()*10)) + ''
                }
                const msgRes = await sendCode(phone, sixStr)
                if(msgRes.Code =='OK'){
                    await msgModel.create({
                        phone,
                        code: sixStr
                    })
                    res.json({
                        code: 200,
                        msg: '验证码发送成功'
                    })
                } else {
                    res.json({
                        code: 500,
                        msg: msgRes 
                    })
                }
            } else {
                res.json({
                    code: 400,
                    msg: '该号码已注册'
                })
            }
        } else {
            res.json({
                code: 400,
                msg: '请输入正确的电话号码'
            })
        }
    } catch (err){
        next(err)
    }
}
module.exports = {
    getCode
}
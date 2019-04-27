const userModel = require('../model/user')
const mongoose = require('mongoose')
const validator = require('validator')
const msgModel = require('../model/msgCode')
const {sign} = require('../utils/signToken')
const colModel = require('../model/collection')
const readModel = require('../model/read')


async function register(req, res, next){
    try{
        const {phone, password, code} = req.body
        const phoneStatus = validator.isMobilePhone(phone, "zh-CN")
        const passwordstatus = validator.isLength(password,6)
        if (phoneStatus){
            if(passwordstatus){
                const user = await userModel.findOne({
                    phone
                })
                if (!user){
                    const msgCode = await msgModel.findOne({code}).sort({_id:-1})
                    if (msgCode){
                        let msgCodeDate= new Date(msgCode.updateTime)
                        let msgCodeTime= Math.round(msgCodeDate.getTime()/1000)
                        let now = Math.round(Date.now()/1000)
                        if ((now-msgCodeTime)<=300){
                            await userModel.create({
                                phone,
                                password,
                            })
                            res.json({
                                code: 200,
                                msg: '注册成功,请登录'
                            })
                        } else {
                            res.json({
                                code: 400,
                                msg: '验证码已失效'
                            })
                        }
                    } else{
                        res.json({
                            code: 400,
                            msg: '验证码错误'
                        })
                    }
                    
                } else{
                    res.json({
                        code: 400,
                        msg: '该号码已注册'
                    })
                }
            } else{
                res.json({
                    code: 400,
                    msg: '密码长度不能少于6位'
                })
            }
        } else{
            res.json({
                code: 400,
                msg: '请输入正确的电话号码'
            })
        }
    }catch (err) {
        next(err)
    }
}
async function login(req, res, next){
    try{
        const {phone, password} = req.body
        const phoneStatus = validator.isMobilePhone(phone, "zh-CN")
        const passwordstatus = validator.isLength(password,6)
        if (phoneStatus&&passwordstatus){
            const user = await userModel.findOne({phone})
            if (user){
                if (password == user.password){
                    const token = sign({userId: user._id})
                    res.json({
                        code: 200,
                        msg: '登录成功',
                        token
                    })
                } else {
                    res.json({
                        code: 400,
                        msg: '密码错误',
                    })
                }
            } else {
                res.json({
                    code: 400,
                    msg: '该用户尚未注册',
                })
            }
        } else {
            res.json({
                code: 400,
                msg: '请确保账号输入正确且密码长度不小于6位'
            })
        }
    } catch(err) {
        next(err)
    }
}
async function getuser(req, res, next){
    try{
        const {userId} = req.user
        const user = await userModel.findById(mongoose.Types.ObjectId(userId))
            .select('-password')
        const collection = await colModel.find({user: mongoose.Types.ObjectId(userId)})
        const read = await readModel.find({user: mongoose.Types.ObjectId(userId)})
        res.json({
            code: 200,
            msg: '获取用户信息成功',
            data:{
                user,
                collection: collection.length,
                read: read.length
            }
        })
    } catch(err){
        next(err)
    }
}
async function changeUser(req, res, next){
    try{
        const {userId} = req.user
        let {desc, username, avatar} = req.body

        if (desc&&!username&&!avatar){
            const user = await userModel.findByIdAndUpdate(mongoose.Types.ObjectId(userId),{$set: {desc: desc}})
            res.json({
                code: 200,
                msg: '修改个性签名成功',
            })
        } else if (username&&!desc&&!avatar){
            const user = await userModel.findByIdAndUpdate(mongoose.Types.ObjectId(userId),{$set: {username: username}})
            res.json({
                code: 200,
                msg: '修改昵称成功',
            })
        } else if(!username&&!desc&&avatar){
            const user = await userModel.findByIdAndUpdate(mongoose.Types.ObjectId(userId),{$set: {avatar: avatar}})
            res.json({
                code: 200,
                msg: '修改头像成功',
            })
        } else{
            res.json({
                code: 200,
                msg: '请确保输入格式正确'
            })
        }
    } catch(err){
        next(err)
    }
}
async function changePassword(req, res, next){
    try{
        const {userId} = req.user
        const {password, changePassword} = req.body

        const user = await userModel.findById(mongoose.Types.ObjectId(userId))
        if(password == user.password){
            const data = await userModel.findByIdAndUpdate(mongoose.Types.ObjectId(userId),{$set: {password: changePassword}})
            res.json({
                code: 200,
                msg: '修改密码成功',
            })
        } else{
            res.json({
                code: 400,
                msg: '原密码输入错误',
            })
        }
    } catch(err){
        next(err)
    }
}
module.exports = {
    register,
    login,
    getuser,
    changeUser,
    changePassword
}

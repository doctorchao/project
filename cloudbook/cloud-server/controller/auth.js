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

async function auth(req, res, next) {
    try{
        let token = req.headers.token || req.body.token || req.query.token
        // 使用解构语法{token} = req.body ||...  body 和query 都无法得到token
        const userData = await getVerify(token)
        if(userData){
            req.user = userData.data
            next()
        } else {
            res.json({
                code: 400,
                msg: '用户未登录或登录状态已失效'
            })
        }
    } catch (err){
        res.json({
            code: 400,
            msg: '用户未登录或登录状态'
        })
    }
}
module.exports = auth

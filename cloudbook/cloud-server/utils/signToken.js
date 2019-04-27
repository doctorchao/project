const jwt = require('jsonwebtoken')

function sign(data, exp){
    return token = jwt.sign({
        exp: exp || Math.floor(Date.now() / 1000) + 60*60*24*7,
        data:data
    }, 'ql')
}
module.exports = {
    sign
}
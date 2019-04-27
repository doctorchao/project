const jwt = require('jsonwebtoken')

const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60),
    data: {
        userId: '001'
    }
}, 'ql');
console.log(token)
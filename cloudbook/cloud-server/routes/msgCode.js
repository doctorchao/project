const {Router} = require('express')
const router = Router()
const {getCode} = require('../controller/msgCode')

router.post('/', getCode)

module.exports = router
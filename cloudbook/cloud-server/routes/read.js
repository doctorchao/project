const {Router} = require('express')
const router = Router()
const auth = require('../controller/auth')
const {getRead} = require('../controller/read')

router.get('/', auth, getRead)

module.exports = router
const {Router} = require('express')
const router = Router()
const {change} = require('../controller/upload')
const auth = require('../controller/auth')

router.get('/', auth,change)

module.exports = router
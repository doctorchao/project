const {Router} = require('express')
const router = Router()
const {register, login, getuser, changeUser, changePassword} = require('../controller/user')
const auth = require('../controller/auth')

router.post('/register', register)
router.post('/login', login)
router.get('/', auth, getuser)
router.put('/', auth, changeUser)
router.post('/changePassword', auth, changePassword)

module.exports = router

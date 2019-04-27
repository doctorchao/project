const {Router} = require('express')
const router = Router()
const {addCollection, getCollection, delCollection} = require('../controller/collection')
const auth = require('../controller/auth')

router.post('/', auth,addCollection)
router.get('/', auth,getCollection)
router.delete('/', auth,delCollection)

module.exports = router
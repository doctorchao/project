const {Router} =require('express')
const router = Router()
const {addCategory, getCategory, addBookToCategory, getBookByCategory, getCategoryBooks} = require('../controller/category')

router.post('/',addCategory)
router.get('/',getCategory)
router.post('/book',addBookToCategory)// 接口路由名不应出现动词
router.get('/books',getBookByCategory)
router.get('/:id/books',getCategoryBooks)

module.exports = router

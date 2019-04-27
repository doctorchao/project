const {Router} = require('express')
const router = Router()
const {getBook, getBookById, getAllBook} = require ('../controller/book')

router.post('/', getBook)
// router.get('/allbook', getAllBook) 如果使用这样的路由 则需要放在/:id上面 不然 allbook会被当做动态路由
router.get('/:id', getBookById)
router.get('/', getAllBook)

module.exports = router
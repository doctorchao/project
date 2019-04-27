var express = require('express');
var router = express.Router();
const bookRouter = require('./book')
const categoryRouter = require('./category')
const titleRouter = require('./title')
const articelRouter = require('./article')
const userRouter = require('./user')
const msgCodeRouter = require('./msgCode')
const swiperRouter = require('./swiper')
const uploadRouter = require('./upload')
const colRouter = require('./collection')
const readRouter = require('./read')


// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/book',bookRouter)//嵌套路由
router.use('/category',categoryRouter)
router.use('/titles', titleRouter)
router.use('/article', articelRouter)
router.use('/user', userRouter)
router.use('/msgCode', msgCodeRouter)
router.use('/swiper', swiperRouter)
router.use('/upload', uploadRouter)
router.use('/collection', colRouter)
router.use('/readList', readRouter)

module.exports = router;


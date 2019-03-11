var Router = require('express');
var router = Router();
var userrouter = require('./user')
var ctg = require('./category')
var art =require('./article')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/register',userrouter)
router.post('/login',userrouter)
router.use('/category',ctg)
router.use('/article',art)

module.exports = router;

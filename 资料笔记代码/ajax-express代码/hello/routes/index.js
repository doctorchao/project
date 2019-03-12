var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hello express' });
});

router.get('/details', (req, res) => {
  res.render('details', {
    content: "这是一段信息"
  })
})

router.get('/toDetails', (req, res)=> {
  res.redirect("/details")
})

module.exports = router;

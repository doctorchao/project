var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/liusiwei', (req, res) =>{
  res.json({
    code: 200,
    data: Date.now()
  })
})

router.get('/dongtai', (req, res) => {
  res.redirect("/liusiwei");
})

module.exports = router;

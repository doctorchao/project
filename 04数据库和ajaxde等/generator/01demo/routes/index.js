var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/detail",(req,res) =>{
  res.render("detail",{
    content0:"周青蓉天下第一",
    content1:"周青蓉巨好看",
  })
})

module.exports = router;

var express = require('express');
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/simpleRequest', (req, res) => {
//   axios.get("http://localhost:3000/simpleRequest").then(response => {
//     res.json(response.data)
//   })
// });

// 原理在服务器上先请求到别的域名的数据，然后返回，前段请求同域下的接口。换句话就是服务器代为转发了一次数据（跨域的概念只存在于浏览器端）

module.exports = router;

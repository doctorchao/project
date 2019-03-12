var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/getJson', (req, res) => {
  // res.json({
  //   text: "我是server1返回的数据",
  //   data: "空数据"
  // })
  res.jsonp({
      text: "我是server1返回的数据",
      data: "空数据"
  })
});

router.get('/simpleRequest', (req, res) => {
    // res.set("Access-Control-Allow-Origin","http://localhost:3002")
    res.json({
        text: "我是简单请求的响应",
        data: "server1的接口"
    })
});

// router.options('/noSimple', (req, res) => {
//     res.set({
//         "Access-Control-Allow-Origin": "http://localhost:3002",
//         "Access-Control-Allow-Headers": "Content-Type",
//         "Access-Control-Allow-Methods": "POST",
//         "Access-Control-Allow-Credentials": true
//     })
//     res.send();
// })

router.post('/noSimple', (req, res) =>{
    console.log(req.body);
    // res.set({
    //     "Access-Control-Allow-Origin": "http://localhost:3002",
    //     "Access-Control-Allow-Headers": "Content-Type",
    //     "Access-Control-Allow-Methods": "POST",
    //     "Access-Control-Allow-Credentials": true
    // });
    res.json({
        text: "我是server1",
        data: "这是一个非简单请求"
    })
});



module.exports = router;

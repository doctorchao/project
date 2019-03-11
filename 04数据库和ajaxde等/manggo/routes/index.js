var express = require('express');
var router = express.Router();
var booksmodel = require("../model/book")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:"周青蓉"});
});
// router.post('/login', (req, res) => {
//   req.session.loginStatus = true;
//   res.json({
//     code: 200,
//     data: "登录成功"
//   })
// })

// router.get("/isLogin", (req, res) => {
//   if(req.session.loginStatus){
//     res.json({
//       code: 200,
//       data: "登录成功的状态"
//     })
//   } else {
//     res.json({
//       code: 200,
//       data: "未登录状态"
//     })
//   }
// })

router.post("/book",(req,res,next) =>{
  const {title,author} = req.body;
  booksmodel.create({title,author}).then(data =>{
    console.log(data)
    res.json({
      code:200,
      data
    })
  })
})
// router.get("/book",(req,res,next) =>{
//   bookmodel.find().then(data =>{
//     res.json({
//       code:200,
//       data
//     })
//   })
// })

// router.patch("/book",(req,res,next) =>{
//   const {author} = req.body
//   bookmodel.update({})
// })

// router.get("/book",(req,res,next)=>{
//   let {pn=1,size=2} = req.query;
//   bookmodel.find().limit(size).skip((pn-1)*size).then(data =>{
//     res.json({
//       code:200,
//       data
//     })
//   })
// })

module.exports = router;

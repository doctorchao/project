var express = require('express');
var router = express.Router();
const usermodel = require("../model/user");
const validator = require('validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/write',(req,res,next)=>{
  res.render('write');
});
router.get('/details',(req,res,next)=>{
  res.render('details');
});

router.post('/registe',(req,res,next)=>{
  const {name,email,password} = req.body
  // const userData = null;
  usermodel.findOne({email}).then(data =>{
    // userData = data;
    if(data){
      res.json({
        code:400,
        msg:"该邮箱已被注册",
      })
    }else{
      if(validator.isEmail(email)){
        usermodel.create({
          name,
          email,
          password
        }).then((data)=>{
          res.send({
              code:200,
              msg:"注册成功"
          })
        })
      }else{
        res.json({
          code:401,
          msg:"邮箱格式不正确"
        })
      }
    }
  })
});
router.post("/login",async (req,res,next) =>{
  try{
      const {email,password} = req.body
      const user = await usermodel.findOne({email})
      console.log(user)
      if(user){
        if(password==user.password){
          req.session.user = user
          res.json({
            code: 200,
            msg:"登录成功",
            data: {
              avatar: user.avatar,
              email: user.email,
              name: user.name
            }
          })
        }else{
          res.json({
            code:400,
            msg:"密码错误"
          })
        }
      }else{
          res.json({
              code: 401,
              msg: "用户不存在"
          })
      }

  } catch(err){
      next(err)
  }
})


module.exports = router;

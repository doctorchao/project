const express = require("express");
const app = express();
const path = require("path");
const query = require("querystring");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.use(express.static('public', options))



app.get("/index", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "./09.html"))
});

app.get("/something", (req, res, next) => {
    console.log(req.url);
    console.log(req.query.shengao);


    res.json({
        data: "返回信息"
    })
})

// app.use((req, res, next) => {
//     var str = '';
//     req.on("data", function(chunk) {
//         str+=chunk;
//     })
//     req.on("end", function() {
//         // console.log(str);
//         // console.log(query.parse(str).name);
//         req.body = query.parse(str);
//         next()
//     })
// })

// app.post("/getPost", (req, res, next) => {
//     console.log(req.body)
//     res.json(req.body);
// })

// app.listen(3000); 


// const express = require("express");
// const app = express();
// const path = require("path"); 
// const query = require("querystring");
// const bodyParser = require("body-parser")

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.get("/index", (req, res, next) => {
//     res.sendFile(path.resolve(__dirname, "./09.html"))
// });

// app.get("/something", (req, res, next) => {
//     console.log(req.url);
//     console.log(req.query.shengao);
//     res.json({
//         data: "返回信息"
//     })
// })

// // app.use((req, res, next) => {
// //     var str = '';
// //     req.on("data", function(chunk) {
// //         str+=chunk;
// //     })
// //     req.on("end", function() {
// //         // console.log(str);
// //         // console.log(query.parse(str).name);
// //         req.body = query.parse(str)
// //         next()
// //     })
// // })
// app.post("/getpost",(req,res,next) =>{
//     console.log(req.body)
//     res.json(req.body)
// })
// app.listen(3000);
// // })

// // app.get("index")


// // app.listen(3000); 
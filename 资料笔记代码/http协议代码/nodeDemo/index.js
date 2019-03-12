const http = require("http");
const path = require("path");
const fs = require("fs");
const mime = require("mime");

const server = http.createServer(function (req, res) {
    let url = req.url;
    let extname = path.extname(req.url);
    console.log(extname, "带点的");
    extname = extname.substring(1);


    fs.readFile(path.join(__dirname, url), (err, data) =>{
        if(err){
            return
        }

        res.writeHead(200, {"Content-Type": mime.getType(extname)})
        res.write(data);
        res.end();
    })

})

server.listen(3001);
var fs = require("fs");

function remove(dir) {
    // 第一步，读取文件夹
    var files = fs.readdirSync(dir)
    console.info(files)  // [ '01.css', '02.css', '03.css', 'h1', 'h2' ]]
    // 第二步，遍历数组
    files.forEach(function (item) {
        /*
        css/01.css
        css/02.css
        css/03.css
        css/h1
        css/h2
        */
        var path = dir+"/"+item;
        switch (fs.statSync(path).mode){
            case 16822:  // 目录
                remove(path);
                fs.rmdir(path)
                break;
            case 33206:   // 文件
                fs.unlinkSync(path)
                break;
            default:
                break;
        }
    })
}

 remove("css")

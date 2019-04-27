const request = require ('request')
const fs = require ('fs')
const cheerio = require ('cheerio')

request.get('https://www.kancloud.cn/tass/es6/458816',(err,data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
    const $ = cheerio.load(data.body)
    const content = $('.content').text()
    // fs.writeFile('./index.html',data.body,err => { // 引入request
    //     if (err) {
    //         console.log(err)
    //     }
    // })
    fs.writeFile('./index1.html',content,err => { // 引入cheerio
        if (err) {
            console.log(err)
        }
    })
})
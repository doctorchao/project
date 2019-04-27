const rq = require ('request-promise')
const fs = require ('fs')
const cheerio = require ('cheerio')
const bookModel = require ('../model/book')
const titleModel = require ('../model/title')
const articleModel = require ('../model/article')


async function getBook (req,res,next) {
    try{
        let {url,img,author,title} = req.body
        const data = await rq.get(url)
        const $ = cheerio.load(data)
        let titleEle = []
        titleEle = $('.catalog a')
        

        let desc = $('meta[name="description"]').attr('content')
        const book = await bookModel.create({
            title,
            img,
            author,
            desc,
            total:titleEle.length
        })

        let titleUrlArr = []
        let titleText = []
        // let titleEle = $('.catalog a')
        let urlArr = url.split('/')
        urlArr.pop()
        let baseUrl = urlArr.join('/') + '/'
        titleEle.each((index,item) => { // 所有目录地址
            titleUrlArr.push(baseUrl+$(item).attr('href'))
            titleText.push($(item).text())
        })

        for(let i = 0; i<titleUrlArr.length; i++){
            const item = titleUrlArr[i]
            // const index = i
            const articleData = await rq.get(item)
            const $ = cheerio.load(articleData)
            const content = $('.content').text().trim()
            const title = await titleModel.create({
                bookId: book._id,
                title: titleText[i],
                index: i,
                total: titleUrlArr.length
            })
            const article = await articleModel.create({
                bookId: book._id,
                index: i,
                content,
                titleId: title._id
            })
        }
        res.json({
            code:200,
            msg:'爬取成功'
        })
        
    } catch (err) {
        next(err)
    }
    
}

async function getBookById (req, res, next) {
    try {
        const {id} = req.params// 解构语法不用加.id
        const data = await bookModel.findById(id)
        res.json({
            code:200,
            data
        })
    } catch (err) {
        next(err)
    }
}
async function getAllBook (req, res, next) {
    try {
        const data = await bookModel.find()
        res.json({
            code:200,
            data
        })
    } catch (err) {
        next(err)
    }
}
module.exports = {
    getBook,
    getBookById,
    getAllBook
}
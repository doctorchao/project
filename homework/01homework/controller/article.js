const Router = require("express")
const router = Router()
const artmodel = require("../model/article")
const mongoose = require("mongoose")

router.post("/", async (req,res,next) =>{
    try{
        let {
            title,
            content,
            contentText,
            category
        } = req.body;
        category = category.map(item => mongoose.Types.ObjectId(item))
        if(req.session.user){ // 已登录
            await artmodel.create({
                title,
                content,
                contentText,
                category,
                author: mongoose.Types.ObjectId(req.session.user._id)
            })
            res.json({
                code: 200,
                msg: "发表成功"
            })
        } else { // 未登录
            res.json({
                code: 401,
                msg: "未登录，发表失败"
            })
        }
    }catch(err){
        next(err)
    }
});
router.get("/", async(req, res, next) => {
    try{
        let {pn=1, size=10} = req.query;
        pn = Number(pn);
        size = Number(size);

        const articles = await artmodel
            .find()
            .populate({
                path: "author",
                select: "-password -email"
            })
            .populate("category")
            .sort({_id: -1})
            .limit(size)
            .skip((pn-1)*size)
        res.json({
            code: 200,
            data: articles
        })
    } catch(err){
        next(err)
    }

})
router.get("/:id",async (req, res, next) => {
    try {
        const {id} = req.params;
        const article = await artmodel
            .findById(id)
            .populate({
                path: "user",
                select: "-password -email"
            })
            .populate("category")
        await article.update({$inc: {
                looksnum: 1
            }})
        res.json({
            code: 200,
            data: article
        })
    }catch(err) {
        next(err)
    }
})

module.exports = router;
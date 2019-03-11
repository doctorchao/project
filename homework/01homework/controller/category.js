const Router = require("express");
const router = Router();
const categorymodel = require("../model/category");

router.post("/", async (req, res, next) => {
    try {
        let {name} = req.body;
        await categorymodel.create({
            name
        })
        res.json({
            code: 200,
            msg: "分类创建成功"
        })
    } catch(err){
        next(err)
    }
})

router.get("/", (req, res) => {
    categorymodel.find().then(data => {
        res.json({
            code: 200,
            data
        })
    })
})

module.exports = router;
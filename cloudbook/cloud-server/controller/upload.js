const upload = require('../utils/qiuniu')

async function change(req, res, next){
    try{
        res.json({
            code: 200,
            data:{
                token: upload()
            }
        })
    } catch(err){
        next(err)
    }
}

module.exports = {
    change
}
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleschema = new Schema({
    title:String,
    content:String,
    contentText:String,
    author:{
        ref:"user",//关联user集合  可从中获取数据
        type:Schema.Types.ObjectId
    },
    category:[
        {
            type:Schema.Types.ObjectId,
            ref:"category",
            required: true
        }
    ],
    looksnum:{
        type: Number,
        default: 0
    },
    commons:[
        {
            type: Schema.Types.ObjectId,
            ref: "common"
        }
    ]
},{
    versionKey:false,
    timestamps: {createdAt: "createtime", updatedAt: "updatetime"}
});
module.exports = mongoose.model("article",articleschema)
const mongoose=require('mongoose')
const CMSchema=new mongoose.Schema(
    {
        id:{type:String,required:true},
        title:{type:String,required:true},
        page:{type:String,required:true},
        type:{type:String,required:true},

    }
)
module.exports=mongoose.model("CMS",CMSchema)
const mongoose=require('mongoose')
const GeneralSchema= new mongoose.Schema(
{
    name:{type:String, required:true},
    email:{type:String,required:true},
    phone:{type:String},
    country:{type:String,required:true},
    reason:{type:String,required:true},
    details:{type:String,required:true},
}
);
module.exports=mongoose.model('General',GeneralSchema)

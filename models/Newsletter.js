const mongoose=require('mongoose')
const NewsletterSchema= new mongoose.Schema(
{
    name:{type:String, required:true},
    email:{type:String,required:true}
}
);
module.exports=mongoose.model('Newsletter',NewsletterSchema)

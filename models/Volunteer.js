const mongoose=require('mongoose')
const VolunteerSchema= new mongoose.Schema(
{
    name:{type:String, required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    city_country:{type:String,required:true},
    role:{type:String,required:true},
    meditation:{type:String,required:true},
    service:{type:Boolean,required:true},
    categories:
    [
        {name:{type:String},extra:{type:String}}
    ],
    contribution:
    [
        {name:{type:String},extra:{type:String}}
    ],
    intrests:{type:String,required:true},
}
);
module.exports=mongoose.model('Volunteer',VolunteerSchema)

const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    FirstName:{type:String,required:true},
    LastName:{type:String,required:true},
    Gender:{type:String,required:true},
    Age:{type:Number,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true},
    Street:{type:String,required:true},
    City:{type:String,required:true},
    Pincode:{type:String,required:true},
    PhoneNumber:{type:String,required:true}
   
})
module.exports=new mongoose.model('Details',userSchema)
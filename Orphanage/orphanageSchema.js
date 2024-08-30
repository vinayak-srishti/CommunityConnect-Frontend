const mongoose=require('mongoose')
const orphanageSchema=new mongoose.Schema({
    OrphanageName:{type:String,required:true},
    YearOfEstablishment:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true},
    Purpose:{type:String,required:true},
    PhoneNumber:{type:String,required:true},
    OrphanageLicenseNo:{type:String,required:true},
    Street:{type:String,required:true},
    City:{type:String,required:true},
    Pincode:{type:String,required:true},
    image:{type:Object},
    isactive:{type:Boolean,default:false}
   
})

module.exports= mongoose.model('OrphanageDetails',orphanageSchema)
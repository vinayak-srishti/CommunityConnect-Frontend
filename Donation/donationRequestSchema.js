const mongoose=require('mongoose')
const donationSchema=new mongoose.Schema({
    OrphanageId:{type:mongoose.Schema.Types.ObjectId,ref:'OrphanageDetails', required:true},
    RequestTitle:{type:String,required:true},
    Amount:{type:String,required:true},
    BankName:{type:String,required:true},
    BankIfscCode:{type:String,required:true},
    BankAcNo:{type:String,required:true},
    Date:{type:Date,required:true},
    RequestCategory:{type:String,required:true},
    UrgencyLevel:{type:String,required:true},
    isactive:{type:Boolean,default:false}
   
})
module.exports=new mongoose.model('Donation',donationSchema)
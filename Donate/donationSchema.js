const mongoose=require('mongoose')
const donateSchema=new mongoose.Schema({
    cardHolderName:{type:String,required:true},
    cardNumber:{type:String,required:true},
    expirationDate:{type:String,required:true},
    cvv:{type:String,required:true},
    amount:{type:String,required:true},
    
   
})
module.exports=new mongoose.model('Donate',donateSchema)
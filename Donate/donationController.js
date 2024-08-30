const donatedetails=require('./donationSchema')
const addDonationDetails=((req,res)=>
    {
        let allDetails=new donatedetails({
            cardHolderName:req.body.cardHolderName,
            cardNumber:req.body.cardNumber,
            expirationDate:req.body.expirationDate,
            cvv:req.body.cvv,
            amount:req.body.amount,
        })
        allDetails.save()
        .then((result)=>{
            res.json({
                status:200,
                msg: result
            })
        })
        .catch((err)=>{
            status:400,
            console.log("error"+err)
        })
    })
    module.exports={addDonationDetails}
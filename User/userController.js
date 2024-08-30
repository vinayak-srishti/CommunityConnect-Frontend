const details=require('./userSchema')
const addDetails=((req,res)=>
    {
        let allDetails=new details({
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Gender:req.body.Gender,
            Age:req.body.Age,
            Email:req.body.Email,
            Password:req.body.Password,
            Street:req.body.Street,
            City:req.body.City,
            Pincode:req.body.Pincode,
            PhoneNumber:req.body.PhoneNumber
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
    const viewUserDetails=((req,res)=>
        {
            details.find()
            .then((result)=>{
                res.json({
                    status:"200",
                    msg: result
                })
            
            })
            //console.log("worked")
                .catch((err)=>{
                    console.log("error"+err)
                })
            
        
        })
        const login=((req,res)=>
            {
                let email=req.body.Email
                let password=req.body.Password
                details.findOne({Email:email})
                .then((result)=>{
                   if(password==result.Password){
                    res.json({
                        status:"200",
                        msg: "Login Successfull",
                        user: {
                            UserId:result._id,
                            FirstName:result.FirstName,
                            
                        }
                    })
                    
                   }
                   else{
                    res.json({
                        status:"500",
                        msg:"Password error"
                    })
                   }
                
                })
                //console.log("worked")
                    .catch((err)=>{
                        res.json({
                        status:"400",
                        msg:"user not found"
                        })
                    })
                })
                const ViewOneUser=((req,res)=>
                    {
                        const UserId = req.params.id;
                        details.findOne({_id: UserId})
                        .then((result)=>{
                            res.json({
                                status:"200",
                                msg: result
                            })
                        
                        })
                        //console.log("worked")
                            .catch((err)=>{
                                console.log("error"+err)
                            })
                        
                    
                    }) 
                    const EditDetails=((req,res)=>
                        {
                            console.log("id",req.params.id,"data",req.body)
                            details.findByIdAndUpdate({_id:req.params.id},
                            {
                                FirstName:req.body.FirstName,
                                LastName:req.body.LastName,
                                Gender:req.body.Gender,
                                Age:req.body.Age,
                                Email:req.body.Email,
                                Password:req.body.Password,
                                Street:req.body.Street,
                                City:req.body.City,
                                Pincode:req.body.Pincode,
                                PhoneNumber:req.body.PhoneNumber
                            })
                            .then((result)=>{
                                res.json({
                                    status:"200",
                                    msg: "updated sucessfully",
                                    msg: result
                                })
                            
                            })
                            //console.log("worked")
                                .catch((err)=>{
                                    console.log("error"+err)
                                })
                            
                        })
    module.exports={addDetails,viewUserDetails,login,ViewOneUser,EditDetails}
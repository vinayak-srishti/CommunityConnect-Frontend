const orphandetails=require("./orphanageSchema")
const multer=require("multer")

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage}).single('image')

//add orphanage details
const addOrphanageDetails=((req,res)=>
{
    let allDetails=new orphandetails({
        OrphanageName:req.body.OrphanageName,
        YearOfEstablishment:req.body.YearOfEstablishment,
        Email:req.body.Email,
        Password:req.body.Password,
        Purpose:req.body.Purpose,
        PhoneNumber:req.body.PhoneNumber,
        OrphanageLicenseNo:req.body.OrphanageLicenseNo,
        Street:req.body.Street,
        City:req.body.City,
        Pincode:req.body.Pincode,
        image:req.file
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

//view all orphanage details
const viewOrphanageDetails=((req,res)=>
    {
        orphandetails.find()
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
    
        //login
    const orphanagelogin=((req,res)=>
        {
            let email=req.body.Email
            let password=req.body.Password
            orphandetails.findOne({Email:email})
            .then((result)=>{
               if(password==result.Password){
                res.json({
                    status:"200",
                    msg: "Login Successfull",
                    user: {
                        OrphanageId: result._id,
                        OrphanageName:result.OrphanageName,
                        image:result.image
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

            //view one orphanage detail
            const ViewOneOrphanage=((req,res)=>
                {
                    const orphanageId = req.params.id;
                    orphandetails.findOne({_id: orphanageId})
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
                const viewallOrphanageRequest=((req,res)=>
                    {
                        orphandetails.find({isactive:false})
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
                    const approveorphanage=(req,res)=>{
                        orphandetails.findByIdAndUpdate({_id:req.params.id}, {isactive:true})
                        .then((result)=>{
                            res.json({
                                status:200,
                                msg:result
                            })
                        })
                            .catch((err)=>{
                                console.log(err);
                                res.json({
                                    status:400,
                                    msg:"cant approve"
                                })
                            
                        })
                    }

                    const EditDetails=((req,res)=>
                        {
                            console.log("id",req.params.id,"data",req.body)
                            orphandetails.findByIdAndUpdate({_id:req.params.id},
                            {
                                OrphanageName:req.body.OrphanageName,
                                YearOfEstablishment:req.body.YearOfEstablishment,
                                Email:req.body.Email,
                                Password:req.body.Password,
                                Purpose:req.body.Purpose,
                                PhoneNumber:req.body.PhoneNumber,
                                OrphanageLicenseNo:req.body.OrphanageLicenseNo,
                                Street:req.body.Street,
                                City:req.body.City,
                                Pincode:req.body.Pincode,
                                image:req.file
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
                
module.exports={addOrphanageDetails,upload,viewOrphanageDetails,orphanagelogin,ViewOneOrphanage,viewallOrphanageRequest,approveorphanage,EditDetails}
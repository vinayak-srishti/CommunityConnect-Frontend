const express=require("express")
const router=express.Router()
const details=require("./User/userController")
const orphandetails=require("./Orphanage/orphanageController")
const donationDetails=require('./Donation/donationRequestController')
const donateDetails=require('./Donate/donationController')

router.post('/addDetails',details.addDetails)
router.post('/viewuserDetails',details.viewUserDetails)
router.post('/userlogin',details.login)
router.post('/viewoneuser/:id',details.ViewOneUser)
router.post('/editdetails/:id', details.EditDetails)


router.post('/addOrphanageDetails',orphandetails.upload,orphandetails.addOrphanageDetails)
router.post('/vieworphanagedetails',orphandetails.viewOrphanageDetails)
router.post('/orphanagelogin',orphandetails.orphanagelogin)
router.post('/viewoneorphanage/:id',orphandetails.ViewOneOrphanage)
router.post('/viewallorphanagerequest',orphandetails.viewallOrphanageRequest)
router.post('/approveorphanage/:id', orphandetails.approveorphanage)
router.post('/editorpdetails/:id', orphandetails.EditDetails,orphandetails.upload)


router.post('/addDonationReq',donationDetails.addDonationReq )
router.post('/viewDonationDetails', donationDetails.viewDonationDetails)
router.post('/viewonerequest/:id',donationDetails.ViewOneRequest)
router.post('/viewalldonationrequest',donationDetails.viewallDonationRequest)
router.post('/approve/:id',donationDetails.approve)
router.post('/viewallapprovedrequest', donationDetails.viewallapprovedRequest)
router.post('/markdonationrequestcomplete/:id', donationDetails.markDonationRequestComplete);
router.post('/reject/:id',donationDetails.rejectRequest)

router.post('/donatepersondetails',donateDetails.addDonationDetails)

module.exports=router
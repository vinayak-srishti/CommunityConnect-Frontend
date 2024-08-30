const OrphanageDetails = require('../Orphanage/orphanageSchema');
const donationDetails=require('./donationRequestSchema')
const addDonationReq = async (req, res) => {
    try {
       const { OrphanageId } = req.body;
      
      // Orphanage exists
      const orphanage = await OrphanageDetails.findById(OrphanageId);
      if (!orphanage) {
        return res.status(404).json({ message: "Orphanage not found" });
      }
  
      const donationRequest = new donationDetails({
        OrphanageId,
        RequestTitle: req.body.RequestTitle,
        Amount: req.body.Amount,
        BankName: req.body.BankName,
        BankIfscCode: req.body.BankIfscCode,
        BankAcNo: req.body.BankAcNo,
        Date: req.body.Date,
        RequestCategory: req.body.RequestCategory,
        UrgencyLevel: req.body.UrgencyLevel
      });
  
      const result = await donationRequest.save();
      res.status(200).json({ message: "Donation request created successfully", result });
    } catch (error) {
      res.status(400).json({ message: "Error creating donation request", error });
    }
  };
const viewDonationDetails = (req, res) => {
    donationDetails.find().populate("OrphanageId")
        .then(result => {
            res.json({ status: "200", msg: result });
        })
        .catch(err => {
            console.log("Error: " + err);
            res.status(400).json({ status: 400, message: "Error fetching donation details" });
        });
};

const ViewOneRequest = (req, res) => {
    const RequestId = req.params.id;
    donationDetails.findById(RequestId).populate("OrphanageId")
        .then(result => {
            res.json({ status: "200", msg: result });
        })
        .catch(err => {
            console.log("Error: " + err);
            res.status(400).json({ status: 400, message: "Error fetching request" });
        });
};

const viewallDonationRequest = ((req, res) => {
    donationDetails.find({ isactive: false }).populate("OrphanageId")
      .then((result) => {
        res.json({ status: "200", msg: "saved", data: result });
      })
      .catch((err) => {
        console.log("Error: " + err);
        res.status(400).json({ status: 400, message: "Error fetching all donation requests" });
      });
  });
  
  const viewallapprovedRequest = ((req, res) => {
    donationDetails.find({ isactive: true }).populate("OrphanageId")
      .then((result) => {
        res.json({ status: "200", msg: "saved", data: result });
      })
      .catch((err) => {
        console.log("Error: " + err);
        res.status(400).json({ status: 400, message: "Error fetching all donation requests" });
      });
  });

const approve = (req, res) => {
    const donationId = req.params.id;
    donationDetails.findByIdAndUpdate(donationId, { isactive: true }, {new:true})
        .then((result) => {
            res.json({ status: 200, msg: result });
        })
        .catch((err) => {
            console.log("Error: " + err);
            res.status(400).json({ status: 400, message: "Approve Failed" });
        });
};

const markDonationRequestComplete = (req, res) => {
    const { id } = req.params;
    
    donationDetails.findByIdAndUpdate(id, { completed: true }, { new: true })
      .then((updatedRequest) => {
        if (!updatedRequest) {
          return res.status(404).json({ msg: 'Donation request not found' });
        }
        res.status(200).json({ msg: 'Donation request marked as completed', data: updatedRequest });
      })
      .catch((err) => {
        console.error('Error marking donation request as completed:', err);
        res.status(500).json({ msg: 'Server error' });
      });
  };
  const rejectRequest = (req, res) => {
    donationDetails.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json({
                status: 200,
                msg: "Rejected successfully",
                data: result
            });
        })
        .catch((err) => {
            console.log(err);
            res.json({
                status: 400,
                msg: "Rejection failed"
            });
        });
};
module.exports = {
    addDonationReq,
    viewDonationDetails,
    ViewOneRequest,
    viewallDonationRequest,
    approve,
    viewallapprovedRequest,
    markDonationRequestComplete,
    rejectRequest
};
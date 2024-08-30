import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Donate.css'

function Donate() {
  const {id}=useParams()
        const [requestData,setRequestData]=useState({})
        const [formData, setFormData] = useState({
          cardHolderName: '',
          cardNumber: '',
          expirationDate: '',
          cvv: '',
          amount: 0,
        });
        const [donationComplete, setDonationComplete] = useState(false);
      
        const handleChange = (e) => {
          console.log(e)
         setFormData({...formData,[e.target.name]:e.target.value})
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          axios.post('http://localhost:4000/donatepersondetails', formData)

      .then((result) => {
        console.log("Donation send", result)
        alert("Donation Done Successfully")
        setDonationComplete(true)
        axios.post(`http://localhost:4000/markdonationrequestcomplete/${id}`)
        .then(response => {
          console.log('Request marked as completed', response);
          // Optionally, navigate to another page or update the UI accordingly
        })
      })
    
    
    console.log("saved")
        };

        useEffect(()=>{
          const fetchDetails= async()=>{
            try{
              const responseRequest = await axios.post(`http://localhost:4000/viewonerequest/${id}`)
              
              console.log('Request Response:', responseRequest);
              setRequestData(responseRequest.data.msg );
              
            }
            catch(error){
              console.log('Error fetching', error)
            }
          }
         if(id){
          fetchDetails()
         }        
                      
              
        },[id]);

        if (donationComplete) {
          return (
            <div className="donate">
              <div className="container mt-5">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">Thank you for your donation!</h5>
                    <p className="text-center">Your generosity is greatly appreciated.</p>
                    <div class='text-center'>
                    <button className="btn btn-primary" onClick={() => window.location.href = '/pendingdonation'}>Go Back to Pending Donations</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
  return (
    <div className='donate'>
        <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Donate to {requestData.OrphanageId?.OrphanageName}</h5>
          <p className="text-center">Pay {requestData.Amount} rupees to the {requestData.OrphanageId?.OrphanageName} orphanage</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="cardHolderName" className="form-label">Card Holder Name</label>
              <input
                type="text"
                className="form-control"
                id="cardHolderName"
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Amount</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expirationDate" className="form-label">Expiration Date</label>
              <input
                type="date"
                className="form-control"
                id="expirationDate"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                placeholder="mm/dd/yyyy"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={() => setFormData({cardHolderName: '', cardNumber: '', amount: '', expirationDate: '', cvv: ''})}>Clear</button>
              <button type="submit" className="btn btn-primary">Donate Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>

   </div>
  )
}

export default Donate
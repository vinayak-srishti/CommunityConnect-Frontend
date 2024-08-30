import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header&Footer/Header';
import OrphanageNavbar from '../Orphanage/OrphanageNavbar';
import { useNavigate } from 'react-router-dom';

function DonationRequestForm({ orpData }) {
  const [data, setdata] = useState({ OrphanageId: '', RequestTitle: '', Amount: '', BankName: '', BankIfscCode: '', BankAcNo: '', Date: '', RequestCategory: '', UrgencyLevel: '' })
  const navigate = useNavigate()
  useEffect(() => {
    if (orpData && orpData.OrphanageId) {
      setdata(prevData => ({
        ...prevData,
        OrphanageId: orpData.OrphanageId
      }));
    }
  }, [orpData]);


  const change = (b) => {

    console.log(b)
    setdata({ ...data, [b.target.name]: b.target.value })
  }

  console.log(data)



  const onsubmit = (b) => {
    b.preventDefault()

    axios.post('http://localhost:4000/addDonationReq', data)

      .then((result) => {
        console.log("Request send", result)
        alert("Request send Successfully")
        navigate("/viewdonation")
      })


    console.log("saved")
  }
  return (
    <div>

      <section>
        <div className='req'>
          <div className='req1'>
            <h4>Donation Request Form</h4>
            <form onSubmit={onsubmit}>
              <div class='row'>
                <div class='col-md-6'>
                  <input class="form-control mb-3" type="text" placeholder="Request Title" onChange={change} value={data.RequestTitle} name='RequestTitle' aria-label="default input example" />
                  <input class="form-control mb-3" type="text" placeholder="Bank Name" onChange={change} value={data.BankName} name='BankName' aria-label="default input example" />
                  <input class="form-control mb-3" type="text" placeholder="Bank Account Number" onChange={change} value={data.BankAcNo} name='BankAcNo' aria-label="default input example" />
                  <input class="form-control" type="text" placeholder="Request Category" onChange={change} value={data.RequestCategory} name='RequestCategory' aria-label="default input example" />
                </div>
                <div class='col-md-6'>
                  <input class="form-control mb-3" type="text" placeholder="Amount Needed" onChange={change} value={data.Amount} name='Amount' aria-label="default input example" />
                  <input class="form-control mb-3" type="text" placeholder="Bank IFSC Code" onChange={change} value={data.BankIfscCode} name='BankIfscCode' aria-label="default input example" />
                  <input class="form-control mb-3" type="date" placeholder="" onChange={change} value={data.Date} name='Date' aria-label="default input example" />
                  <select class="form-control mb-3" aria-label="Default select example" onChange={change} value={data.UrgencyLevel} name='UrgencyLevel' >
                    <option selected>Select Urgency Level</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                  </select>
                </div>
                <div class='text-center'>
                  <button type="submit" class="btn btn-primary mb-5" style={{ width: '200px' }}>Request</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DonationRequestForm
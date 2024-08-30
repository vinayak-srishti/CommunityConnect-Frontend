import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../Header&Footer/Header'
import img1 from '../Images/5454.jpg'
import Footer from '../Header&Footer/Footer'

function DonateToOrphanage() {
  const { id } = useParams()
  const [requestData, setRequestData] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const responseRequest = await axios.post(`http://localhost:4000/viewonerequest/${id}`)

        console.log('Request Response:', responseRequest);
        setRequestData(responseRequest.data.msg);

      }
      catch (error) {
        console.log('Error fetching', error)
      }
    }
    if (id) {
      fetchDetails()
    }


  }, [id]);


  return (

    <div>
      <section>
        <Header />
      </section>
      <section>
        <div class='row'>
          <div class='col-6'>
            <div class="card mx-auto border-0" style={{ marginTop: '50px', marginLeft: '50px', marginRight: '50px', paddingLeft: '30px', width: '500px', marginBottom: '50px' }}>
              <div class="card-body">


                <h2 class="card-title" style={{ color: '#630330',fontWeight:'bold'}}><h2></h2>{requestData.OrphanageId?.OrphanageName}</h2>
                <p class="card-text">Request For : {requestData.OrphanageId?.Purpose}</p>
                <h5 class='card-title' style={{ color: '#630330',fontWeight:'bold'}}>Request Details</h5>
                <p class="card-text" >Total Amount: {requestData.Amount}</p>
                <p class="card-text">Category: {requestData.RequestCategory}</p>
                <p class="card-text">Request Urgency: {requestData.UrgencyLevel}</p>
                <h5 class='card-title' style={{ color: '#630330',fontWeight:'bold'}}>Orphanage Details</h5>
                <p class="card-text">Phone Number: {requestData.OrphanageId?.PhoneNumber}</p>
                <p class="card-text">Orphanage City: {requestData.OrphanageId?.City}</p>
                <p class="card-text">Bank Account Number: {requestData.BankAcNo}</p>
                <p class="card-text">Email: {requestData.OrphanageId?.Email}</p>
                <p class="card-text">Pincode: {requestData.OrphanageId?.Pincode}</p>
                <Link to={`/donate/${requestData._id}`}><button type="submit" class="btn btn-info border-0" style={{ backgroundColor: 'brown', color: 'white' }}>Donate</button></Link>
              </div>
            </div>
          </div>
          <div class='col-6'>
            <div class="card mx-auto" style={{ width: ' 20rem', height: '20rem', marginTop: '100px', marginBottom: '50px', paddingTop: '30px', alignItems: 'center' }}>
              < img src={img1} class="card-img-top" alt="..." />

            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default DonateToOrphanage
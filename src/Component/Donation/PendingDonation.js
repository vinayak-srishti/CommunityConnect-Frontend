import React, { useState, useEffect } from 'react'
import axios from 'axios'
import img from '../Images/5454.jpg'
import img1 from '../Images/donate.jpg'
import Header from '../Header&Footer/Header'
import Footer from '../Header&Footer/Footer'
import { Link } from 'react-router-dom'
import './Pending.css'


function PendingDonation() {
  const [donationdata, setdonationData] = useState([])

  axios.post('http://localhost:4000/viewallapprovedrequest')
    .then((result) => {
      console.log(result)
      setdonationData(result.data.data)
      console.log(result.data.data)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..." style={{ height: '500px' }} />
            </div>
          </div>

        </div>
      </section>
      <section>
        <h2 style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '10px', color: 'blue' }}>Pending Donation Request</h2>
        <div className="card-container11">
          {donationdata.map((item) => (
            <div class="card12" style={{ width: "18rem", marginTop: '50px', marginBottom: '50px', marginLeft: '50px' }}>
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{item.RequestTitle}</h5>
                <p class="card-text">{item.RequestCategory} </p>
                <Link to={`/donatetoorphanage/${item._id}`}><button type="submit" class="btn btn-info border-0" style={{ backgroundColor: 'brown', color: 'white' }}>Donate</button></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default PendingDonation
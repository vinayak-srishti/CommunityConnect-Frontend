import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../Header&Footer/Header'
import img from '../Images/helping.jpg'
import img1 from '../Images/Orphanage.png'
import Footer from '../Header&Footer/Footer'

function OrphanageDetailsList() {
  const { id } = useParams()
  const [data, setdata] = useState({})

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.post(`http://localhost:4000/viewoneorphanage/${id}`)
        console.log(response)
        setdata(response.data.msg)
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
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img} class="d-block w-100" alt="..." style={{ height: '400px' }} />
            </div>
          </div>

        </div>
      </section>
      <section>
        <div class='row justify-content-center'>
          <div class='col-6'>
            <div class="card mx-auto" style={{ width: ' 20rem', marginTop: '100px', marginBottom: '50px', alignItems: 'center' }}>
              <img src={img1} class="card-img-top" alt="..." />

            </div>
          </div>
          <div class='col-6'>

            <div class="card mx-auto border-0" style={{ marginTop: '50px', marginRight: '50px', width: '500px', marginBottom: '50px' }}>
              <div class="card-body" >
                <h1 class="card-title" style={{ fontFamily: 'serif', color: '#630330' }}>{data.OrphanageName}</h1>
                <p class="card-text">{data.Purpose}</p>
                <p class="card-text"><strong>Started Year: </strong>{data.YearOfEstablishment}</p>
                <p class="card-text"><strong>Phone Number: </strong>{data.PhoneNumber}</p>
                <p class="card-text"><strong>Email: </strong>{data.Email}</p>
                <p class="card-text"><strong>Orphanage Address: </strong>{data.Street}</p>
                <p class="card-text"><strong>Orphanage City: </strong>{data.City}</p>
                <p class="card-text"><strong>Pincode: </strong>{data.Pincode}</p>
              </div>
            </div>

          </div>
        </div>
      </section><br />
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default OrphanageDetailsList
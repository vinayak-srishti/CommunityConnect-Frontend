import React from 'react'
import userimg from '../Images/user1.jpeg'
import img from '../Images/front.png'
import img2 from '../Images/donation.jpeg'
import img1 from '../Images/Education.jpeg'
import Header from '../Header&Footer/Header'
import Footer from '../Header&Footer/Footer'

function UserHome() {
  return (
    <div>
      <section>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..." style={{ height: '500px' }} />
              <div class="carousel-caption d-none d-md-block">
                <h5 style={{color:'#31473A'}}>Contribute for Education</h5>
                <p>Your donation to Orphan Life Foundation will enable many orphaned children in India to go to school and build a better, brighter future for themselves.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={userimg} class="d-block w-100" alt="..." style={{ height: '500px' }} />
              <div class="carousel-caption d-none d-md-block">
                <h5 style={{color:'#31473A'}}>Contribute for their food</h5>
                <p >We need your help in providing the children with basic provisions and supplies, for food and sanitation. Please donate for the cause of making the lives of these innocent children better.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000" >
              <img src={img} class="d-block w-100" style={{ height: '400px' }} alt="..." />
              <div class='container color-overlay d-flex justify-content-center align-items-center '>
                <div class='row'>
                  <div class='col-md-4'>
                    <div class="carousel-caption  justify-content-center " style={{ position: 'absolute', top: '50px', color: 'white' }}>
                      <div class='container' className='con1'>
                        <div class='row d-flex justify-content-center'>
                          <div class='col-md-8'>

                            <h5 style={{ fontSize: '30px' }}>Empowering Change Transforming Lives</h5><br />
                            <p style={{ fontSize: '20px' }}>Welcome to COMMUNITY, where compassion meets action. At the heart of the mission lies the unwavering belief that every individual, regardless of their background or circumstance deserve the opportunity to lead a dignified and fulfilling life </p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      <section>
        <div class='container '    >
          <div class='row d-flex justify-content-center'>
            <div class='col-md-9' >

              <h3 className='ma-head' style={{ textAlign: 'center',marginTop:'20px' }} >How can you contribute to us?</h3>
              <p className='ppp' style={{ textAlign: 'center' }}>We are humanitarian initiative committed to making a positive
                impact on the world. Founded on the principles of empathy
                solidarity, and sustainable development, we strive to
                address the most pressing challenges facing communities
                around the globe.</p>
              <div class='container'>
                <div class='col-md-12 text-center'>
                  <a class="btn btn-primary text-center border-0" href="/about" role="button" style={{ width: '150px', borderRadius: '50px', backgroundColor: '#FEE715',color:'#101820' }}>About us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id='home1'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-lg-6 col-md-6 col-12'>
              <img src={img2} class='img-fluid' />
            </div>
            <div class='col-lg-6 col-md-6 col-12 p-lg-5 p-2 '>
              <div class="card border-light mb-3" style={{ background: '#f5f5f5' }}>

                <div class="card-body  mx-5" >
                  <h5 class="card-title">Donate</h5>
                  <p class="card-text">Where your donation Becomes Poetry and Movements Tell Tales We need 100k</p>
                  <a href="#" class="btn btn-primary mx-4">Conduct</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section> */}
      <section id='homeone'>
        <div class='container'>
          <div class='row d-flex justify-content-center'>
            <div class='col-md-12 '>
              <h2>Step in to the world of Rhythmie Expression</h2>
              <p style={{marginBottom:'20px'}}>Where Donation Poetry and Movements Tell Tales</p>
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

export default UserHome
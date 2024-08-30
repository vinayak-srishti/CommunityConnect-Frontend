import React from 'react'
import img from '../Images/help.jpg'
import img1 from '../Images/children.jpeg'
import img3 from '../Images/front.png'
import img2 from '../Images/5454.jpg'
import OrphanageNavbar from './OrphanageNavbar'
import Footer from '../Header&Footer/Footer'


function OrphanageHome({ user }) {
  return (
    <div>
      <section>
        <OrphanageNavbar user={user} />
      </section>
      <section>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..." style={{ height: '500px' }} />
              <div class="carousel-caption d-none d-md-block">
                <h5 style={{color:'white'}}>Contribute for Education</h5>
                <p>Your donation to Orphan Life Foundation will enable many orphaned children in India to go to school and build a better, brighter future for themselves.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img} class="d-block w-100" alt="..." style={{ height: '500px' }} />
              <div class="carousel-caption d-none d-md-block">
                <h5 style={{color:'white'}}>Contribute for their food</h5>
                <p>We need your help in providing the children with basic provisions and supplies, for food and sanitation. Please donate for the cause of making the lives of these innocent children better.</p>
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
              <img src={img3} class="d-block w-100" style={{ height: '400px' }} alt="..." />
              <div class='container color-overlay d-flex justify-content-center align-items-center '>
                <div class='row'>
                  <div class='col-md-4'>
                    <div class="carousel-caption  justify-content-center " style={{ position: 'absolute', top: '50px', color: 'white' }}>
                      <div class='container' className='con1'>
                        <div class='row d-flex justify-content-center'>
                          <div class='col-md-8'>

                            <h5 style={{ fontSize: '30px',color:'#8AAAE5' }}>Empowering Change Transforming Lives</h5><br />
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
      <section >
        <div class='container'>
          <div class='row d-flex justify-content-center'>
            <div class='col-md-9'>
              <h4 style={{ textAlign: 'center', color: 'brown',marginTop:'20px' }}>Compassion and Care for Orphans</h4>
              <p style={{ textAlign: 'center' }}>There is no trust more sacred than the one the world holds with children. There is no duty more important than ensuring that their rights are respected, that their welfare is protected, that their lives are free from fear and want and that they grow up in peace.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section id='home1'>
        <div class='container-fluid'>
          <div class='row'>
            <div class=' col-md-6 '>
              <img src={img2} style={{height:'300px',width:'650px'}} class='img-fluid' />
            </div>
            <div class='col-md-6'>
              <div class="card border-light mt-3 mb-3" style={{ background: '#f5f5f5',height:'100px' }}>

                <div class="card-body  mx-5" style={{ filter: 'drop-shadow(5px 5px 10px #555',textAlign:'center' }}>
                  <h5 class="card-title">Strength and Potential of Orphanage Children</h5>
                  <p class="card-text" style={{textAlign:'center'}}>"Every child deserves a champion — an adult who will never give up on them, who understands the power of connection and insists that they become the best that they can possibly be.</p>
                  
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

export default OrphanageHome
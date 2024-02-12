import React from 'react'
import img from '../Image/sign.jpg'
import img1 from '../Image/amb.jpeg'
import img2 from '../Image/children.jpeg'
import Footer from '../Inc/Footer'

function Hometwo() {
  return (
    <div>
        <section>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000" >
      <img src={img} class="d-block w-100"  style={{height:'500px'}} alt="..."/>
       <div class='container color-overlay d-flex justify-content-center align-items-center '>
          <div class='row'>
            <div class='col-md-4'>
                <div class="carousel-caption  justify-content-center " style={{position:'absolute',top:'50px',color:'white'}}>
                  
                   <div class='container' className='con1'>
                   <input class="form-control me-2 d-flex justify-content-center " style={{borderRadius:'50px'}} type="search" placeholder="Search Videos here" aria-label="Search"/><br/>
                    <div class='row d-flex justify-content-center'>
                      <div class='col-md-8'>
                   <h5 style={{fontSize:'30px'}}>Empowering Change Transforming Lives</h5><br/>
                   <p style={{fontSize:'20px'}}>Welcome to COMMUNITY, where compassion meets action. At the heart of the mission lies the unwavering belief that every individual, regardless of their background or circumstance deserve the opportunity to lead a dignified and fulfilling life </p>
                   <button type="button" class="btn btn-primary" style={{backgroundColor:'yellow',color:'black',width:'200px',borderRadius:'50px'}}>Know More</button>
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
        <section id='home5'>
       <div class='container-fluid'>
        <div class='row'>
          <div class='col-lg-6 col-md-6 col-12'>
            <img src={img1} class='img-fluid'/>
          </div>
          <div class='col-lg-6 col-md-6 col-12 p-lg-5 p-2 '>
          <div class="card border-light mb-3 border-0" style={{background:'#070b0e'}}>
  
  <div class="card-body  mx-5" style={{filter:'drop-shadow(5px 5px 10px #555'}}>
    <h5 class="card-title">Donate</h5>
    <p class="card-text">Where your donation Becomes Poetry and Movements Tell Tales We need 100k</p>
     <a href="#" class="btn btn-primary mx-4">Conduct</a>
  </div>
</div>

          </div>
        </div>
       </div>
      </section>
      <section id='home6'>
      <div class='container-fluid'>
        <div class='row'>
        <div class='col-lg-6 col-md-6 col-12 p-lg-5 p-2 '>
          <div class="card border-0 mb-3" style={{background:'#630330',marginLeft:'50px'}}>
  
  <div class="card-body  mx-5" style={{marginLeft:'50px',background:'#630330'}}>
    <h5 class="card-title">Charity</h5>
    <p class="card-text">Where your charity Becomes Poetry and Movements Tell Tales We need 100k</p>
     <a href="#" class="btn btn-primary mx-4">View charity</a>
  </div>
</div>

          </div>
          <div class='col-lg-6 col-md-6 col-12'>
            <img src={img2} class='img-fluid'/>
          </div>
        </div>
      </div>
      </section>
      <section id='home3'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-md-12 mt-5'style={{background:'#ff3300'}}>
              <h4 style={{textAlign:'center',color:'white',marginTop:'30px'}}>View your Donations</h4>
            <table class="table table-borderless" >
  <thead>
    <tr>
      <th scope="col" style={{color:'#ff3300',fontFamily:'cursive'}}>Orphanage name</th>
      <th scope="col" style={{color:'#ff3300',fontFamily:'cursive'}}>Date</th>
      <th scope="col" style={{color:'#ff3300',fontFamily:'cursive'}}>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{fontFamily:'cursive',color:'black'}}><input type="text" class='border-0' placeholder='Orphanage name'  /></td>
      <td style={{fontFamily:'cursive'}}><input type='date' class='border-0' style={{color:'gray'}} /></td>
      <td style={{fontFamily:'cursive',color:'gray'}}>20k</td>
    </tr>
    <tr>
      <td style={{fontFamily:'cursive'}}><input type="text" class='border-0' placeholder='Orphanage name'  /></td>
      <td style={{fontFamily:'cursive'}}><input type='date' class='border-0' style={{color:'gray'}} /></td>
      <td style={{fontFamily:'cursive',color:'gray'}}>20k</td>
    </tr>
  </tbody>
</table>
<div class='text-center'>
<a href="#" class="btn btn-primary" style={{width:'150px',marginBottom:'20px'}}>View all</a>
</div>
            </div>
          </div>
        </div>
      </section>
      <section id='homeone'>
        <div class='container'>
          <div class='row d-flex justify-content-center'>
            <div class='col-md-4 '>
              <h6>Step in to the world of Rhythmie Expression</h6>
              <p>Where Donation Poetry and Movements Tell Tales</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default Hometwo
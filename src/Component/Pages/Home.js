import React from 'react'
import img from '../Image/change.jpeg'
import img1 from '../Image/Blood.jpg'
import img2 from '../Image/children.jpeg'
import img3 from '../Image/ocean.jpg'
import Footer from '../Inc/Footer'
function Home() {
  return (
    <div>
      <section>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="d-block w-100" style={{height:'300px'}} alt="..."/>
      <div class="carousel-caption  justify-content-center " style={{position:'absolute',top:'50px'}}>
        <div class='container' className='con1'>
           <div class='row d-flex justify-content-center'>
              <div class='col-md-8'>
                <input class="form-control me-2 d-flex justify-content-center " style={{borderRadius:'50px'}} type="search" placeholder="Search Videos here" aria-label="Search"/><br/>
              </div>
            </div>
          </div>
         </div>
    </div>
  </div>
</div>
      </section>  <br/>

      <section>
      <div class='container '    >
    <div class='row d-flex justify-content-center'>
      <div class='col-md-6' >
        
        <h5 className='ma-head' >How can you contribute to us</h5>
          <p className='ppp'>humanitarian initiative committed to making a positive
impact on the world. Founded on the principles of empathy
solidarity, and sustainable development, we strive to
address the most pressing challenges facing communities
around the globe.</p>
     <div class='container'>
      <div class='col-md-12 text-center'>
      <a class="btn btn-primary text-center" href="#" role="button" style={{width:'150px',borderRadius:'50px',backgroundColor:'yellow'}}>About us</a>
      </div>
     </div>
</div>
      </div>
    </div>
      </section>
      <section id='home1'>
       <div class='container-fluid'>
        <div class='row'>
          <div class='col-lg-6 col-md-6 col-12'>
            <img src={img1} class='img-fluid'/>
          </div>
          <div class='col-lg-6 col-md-6 col-12 p-lg-5 p-2 '>
          <div class="card border-light mb-3"style={{ background:'#f5f5f5'}}>
  
  <div class="card-body  mx-5" style={{filter:'drop-shadow(5px 5px 10px #555'}}>
    <h5 class="card-title">Blood camp</h5>
    <p class="card-text">Where your donation Becomes Poetry and Movements Tell Tales We need 100k</p>
     <a href="#" class="btn btn-primary mx-4">Conduct</a>
  </div>
</div>

          </div>
        </div>
       </div>
      </section>
      <section id='home2'>
      <div class='container-fluid'>
        <div class='row'>
        <div class='col-lg-6 col-md-6 col-12 p-lg-5 p-2 '>
          <div class="card border-0 mb-3" style={{background:'#fde0ff',marginLeft:'50px'}}>
  
  <div class="card-body  mx-5" style={{marginLeft:'50px',background:'#fde0ff'}}>
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
      <td style={{fontFamily:'cursive'}}><input type="text" class='border-0' placeholder='Orphanage name'  /></td>
      <td style={{fontFamily:'cursive'}}><input type='date' class='border-0' style={{color:'gray'}} /></td>
      <td style={{fontFamily:'cursive',color:'gray'}}>20k</td>
    </tr>
    <tr>
      <td style={{fontFamily:'cursive'}}><input type="text" class='border-0'  placeholder='Orphanage name'  /></td>
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

export default Home
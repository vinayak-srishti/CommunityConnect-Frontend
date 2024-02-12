import React from 'react'
import img from './Image/reg.jpg'
import Footer from './Inc/Footer'

function Register() {
  return (
   <div>
      <section>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} style={{height:'500px',width:'100%'}} alt="..."/>
      <div class='container color-overlay d-flex justify-content-center align-items-center'>
         <div class='row'>
            <div class='col-md-4'>
            <div class="carousel-caption justify-content-center " style={{position:'absolute',top:'50px'}}>
      <div class='container'>
         <div class='row d-flex justify-content-center '>
            <div class='col-md-8'>
            <input class="form-control me-2 d-flex justify-content-center " style={{borderRadius:'50px'}} type="search" placeholder="Search Videos here" aria-label="Search"/><br/>
        <h5 style={{fontSize:'30px'}}>Empowering Change Transforming Lives</h5>
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
      <section className='app1'>
         <div class='reg3'>
            <div className='regcontain4'>
            <div class="dropdown" >
  <button class="btn btn-secondary dropdown-toggle" style={{width:'100%',background:'white',color:'black'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
    User
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">User</a></li>
    <li><a class="dropdown-item" href="#">Organization</a></li>
    <li><a class="dropdown-item" href="#">Orphanage</a></li>
  </ul>
</div>

<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Your age" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="Email" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Password" aria-label="Last name"/>
  </div>
</div><div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="Street" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="City" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="State" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Pincode" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="Nationality" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Contact Number" aria-label="Last name"/>
  </div>
</div>

<div class="mb-3">
  <label for="formFile" class="form-label">Upload your photo</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Agree to our terms and conditions
  </label>
</div>
            </div>
         </div>

      </section>
      <Footer/>
   </div>
  )
}

export default Register
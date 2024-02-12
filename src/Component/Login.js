import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import img from './Image/loginimage.jpeg'
import Footer from './Inc/Footer'
function Login() {
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
                  <input class="form-control me-2 d-flex justify-content-center " style={{borderRadius:'50px'}} type="search" placeholder="Search Videos here" aria-label="Search"/><br/>
                   <div class='container' className='con1'>
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

 <section className='app1'>
    <div className='loginContainer'>
    <div class='container-fluid' style={{backgroundColor:'yellow'}}>
    <nav class="navbar ">
  
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">Organization</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">User</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Orphanage</a>
    </li>
  </ul>
 
</nav>
</div>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
 
</div>

        <div className='input-container'>
           <div class="form-floating mb-3">
           <input type="email" style={{width:'300px'}} class="form-control"  id="floatingInput" placeholder="name@example.com"/>
           <label for="floatingInput">Email address</label>
           </div>
             <div class="form-floating">
             <input type="password" style={{width:'300px'}} class="form-control" id="floatingPassword" placeholder="Password"/>
             <label for="floatingPassword">Password</label>
             </div>
        </div>
      <a href='#'>Forget Password</a><br/>
      <button type="button" style={{width:'100px'}} class="btn btn-primary">Login</button><br/>
      <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
  Sign Up
</a><br/>
    </div>
  
 </section>

<Footer/>
       
      </div>
        

    
  )
}

export default Login
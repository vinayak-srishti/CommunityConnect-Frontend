import React from 'react'
import img6 from './Image/Blood.jpg'
import Footer from './Inc/Footer'

function Bloodcamp() {
  return (
    <div>
       <section>
       <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img6} class="d-block w-100" style={{height:'400px'}} alt="..."/>
    </div>
    
    </div>
  </div>
       </section> 
       
       <section class='app1'>
  <div className='reg1'>
    <div class='container' style={{background:'#efefef'}}>
      <div class='row'>
        <div class='col-md-6'>
        <button type="button" class="btn btn-primary" style={{width:'100px'}}>Register</button> 
        </div>
      </div>
    </div><br/>
  <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" style={{width:'230px',background:'#efefef',color:'#808080'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
       Select User Type
      </button>
      <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">User</a></li>
      <li><a class="dropdown-item" href="#">Organization</a></li>
       <li><a class="dropdown-item" href="#">Orphanage</a></li>
      </ul>
       </div><br/>
       <div className='regcontainer'>
        
          <input type="text" class="form-control" style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Name"/>
          <input type="text" class="form-control" style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Username"/>
          <input type="text" class="form-control" style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Organisation name"/>
          <input type="password" class="form-control" style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Password"/>
          
          </div> <br/>
          <button type="button" class="btn btn-primary" style={{width:'100px'}}>Login</button> <br/>   
  </div>
  </section><br/><br/><br/><br/><br/><br/>

       <Footer/>
    </div>
  )
}

export default Bloodcamp
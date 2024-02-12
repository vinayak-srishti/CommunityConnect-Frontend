import React from 'react'
import img5 from './Image/ocean.jpg'
import Footer from './Inc/Footer'

function Logreg() {
  return (
    <div>
       <section>
       <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000" >
      <img src={img5} class="d-block w-100"  style={{height:'500px'}} alt="..."/>
       <div class='container color-overlay d-flex justify-content-center align-items-center '>
          <div class='row'>
            <div class='col-md-4'>
                <div class="carousel-caption  justify-content-center " style={{position:'absolute',top:'50px',color:'white'}}>
                   <div class='container'>
                    <div class='row d-flex justify-content-center'>
                      <div class='col-md-8'>
                      <input class="form-control me-2 d-flex justify-content-center " style={{borderRadius:'50px'}} type="search" placeholder="Search Videos here" aria-label="Search"/><br/>
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

export default Logreg
import React, {useState} from 'react'
import img5 from './Image/ocean.jpg'
import Footer from './Inc/Footer'

function Logreg() {
  const [data,setdata]=useState({users:'',name:'',username:'',orgname:'',password:''})
  const change=(a)=>{
    console.log(a)
    setdata({...data,[a.target.name]:a.target.value})
  }
  console.log(data)
  const submit=(a)=>{
    a.preventDefault()
    console.log('saved')
    //axios.post('https://jsonplaceholder.typicode.com/posts',data)
    //.then((result)=>{
      //console.log(result)
    //})
    //.catch((error)=>{
    //  console.log(error)
    //})
  }
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
    <form onSubmit={submit}>
  <div class="dropdown">
  
            <select class="form-select" style={{color:'gray'}} onChange={change} name='users' value={data.users} aria-label="Default select example">
  <option selected>Select User type</option>
  <option value="User">User</option>
  <option value="Organization">Organisation</option>
  <option value="Orphanage">Orphanage</option>
</select>

       </div><br/>
       <div className='regcontainer'>
        
          <input type="text" class="form-control" onChange={change} name="name" data={data.name} style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Name"/>
          <input type="text" class="form-control" onChange={change} name="username" data={data.username} style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Username"/>
          <input type="text" class="form-control" onChange={change} name="orgname" data={data.orgname}style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Organisation name"/>
          <input type="password" class="form-control" onChange={change} name="password" data={data.password} style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Password"/>
          
          </div> <br/>
          <button type="submit" class="btn btn-primary" style={{width:'100px'}}>Login</button> <br/>  
          </form> 
  </div>
  
  </section><br/><br/><br/><br/><br/><br/>


  <Footer/>
    </div>
  )
}

export default Logreg
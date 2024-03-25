import React, { useState } from 'react'
import axios from 'axios'
import img from './Image/reg.jpg'
import Footer from './Inc/Footer'

function Register() {
  const[data,setdata]=useState({users:'',fname:'',lname:'',gender:'',age:'',email:'',password:'',street:'',city:'',state:'',pin:'',nation:'',con:'',photo:''})
  const change=(b)=>{
    console.log(b)
    setdata({...data,[b.target.name]:b.target.value})
  }
  console.log(data)
  const submit=(b)=>{
    b.preventDefault(b)
    console.log('Save')
    //axios.post('https://jsonplaceholder.typicode.com/posts',data)
    //.then((result)=>{
    //  console.log(result)
    //})
    //.catch((error)=>{
    //   console.log(error)
    // })
  }
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
              <form onSubmit={submit}>
            <div class="dropdown" >
            <select class="form-select" style={{color:'gray'}} onChange={change} name='users' value={data.users} aria-label="Default select example">
  <option selected>User</option>
  <option value="User">User</option>
  <option value="Organization">Organisation</option>
  <option value="Orphanage">Orphanage</option>
</select>
</div>

<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='fname' value={data.fname} placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='lname' value={data.lname} placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div class="col">
  <select class="form-select" style={{color:'gray'}} onChange={change} name='gender' value={data.gender} aria-label="Default select example">
  <option selected>Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Others">Others</option>
</select>
  </div>
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='age' value={data.age} placeholder="Your age" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='email' value={data.email} placeholder="Email" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='password' value={data.password} placeholder="Password" aria-label="Last name"/>
  </div>
</div><div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='street' value={data.street} placeholder="Street" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='city' value={data.city} placeholder="City" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='state' value={data.state} placeholder="State" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='pin' value={data.pin} placeholder="Pincode" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='nation' value={data.nation} placeholder="Nationality" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" onChange={change} name='con' value={data.con} placeholder="Contact Number" aria-label="Last name"/>
  </div>
</div>

<div class="mb-3">
  <label for="formFile" class="form-label">Upload your photo</label>
  <input class="form-control" type="file" onChange={change} name='photo' value={data.photo} id="formFile"/>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Agree to our terms and conditions
  </label><br/>
  <div class='text-center'>
  <button type="submit" class="btn btn-primary" style={{width:'200px',borderRadius:'50px'}}>Register</button>
  
  </div>
  
</div>
</form>
            </div>
         </div>

      </section>
      <Footer/>
   </div>
  )
}

export default Register
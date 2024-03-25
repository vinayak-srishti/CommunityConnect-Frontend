import React, {useState} from 'react'
import img3 from './Image/password.jpeg'
function Password() {
  const [data,setdata]=useState({password:'',newpass:''})
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
      <img src={img3} class="d-block w-100"  style={{height:'500px'}} alt="..."/>
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
     
      <div class='loginContainer'>
      <div class="container-fluid"  style={{background:'#efefef'}}>
      <nav class="navbar " id='head-navbar'>
 
 <a class="navbar-brand" href="#">
 <button type="button float-left" class="btn btn-primary" style={{width:'150px',height:'40px'}}>Change Password</button>
 </a>

</nav>
</div><br/>
<form onSubmit={submit}>
        <div className='input-container1'>
         <div class="col-auto">
           <label for="inputPassword2" class="visually-hidden">Password</label>
          <input type="password" class="form-control" onChange={change} name='password' onDragStart={data.password} id="inputPassword2" placeholder="Password"/>
         </div>
         
         <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Password</label>
            <input type="password" class="form-control" onChange={change} name='newpass' data={data.newpass}  id="inputPassword2" placeholder="New Password"/>
         </div>
         
        </div><br/>
        
        <button type="submit" class="btn btn-primary" style={{width:'130px'}}>Change</button><br/>
        <div className='inp1'>
        <label for="exampleFormControlInput1" class="form-label">New User</label>
        <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
Sign up
</a>

</div>
</form>

      </div>
    
     </section>
    </div>
  )
}

export default Password
import React, {useState} from 'react'
import img6 from './Image/Blood.jpg'
import Footer from './Inc/Footer'

function Bloodcamp() {
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
          <input type="text" class="form-control" onChange={change} name="orgname" data={data.orgname} style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Organisation name"/>
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

export default Bloodcamp
import React, {useState} from 'react'
import img6 from './Image/Blood.jpg'
function Bloodcampdetails() {
  const [data,setdata]=useState({username:'',age:'',location:''})
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
        <section >
            <h1 class='fst-italic' style={{textAlign:'center',fontFamily:'cursive',marginTop:'100px',marginBottom:'70px'}}>Blood Camp</h1>
            <div class='container'>
                <div className='t1'>
          <table class="table">
  <thead >
    <tr >
      
      <th scope="col" style={{background:' #ff3300'}}>Date</th>
      <th scope="col" style={{background:' #ff3300'}}>Location</th>
      <th scope="col" style={{background:' #ff3300'}}>Org Name</th>
      <th scope="col" style={{background:' #ff3300'}}>Status</th>
      <th scope="col" style={{background:' #ff3300',textAlign:'center'}}>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}} /></td>
      <td style={{background:'#efefef'}}><a class="link-offset-2 link-underline link-underline-opacity-0" style={{color:'#808080  ',fontFamily:'cursive'}} href="#">Location</a></td>
      <td style={{background:'#efefef'}}><input type="" class='border-0' placeholder='Org name' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
      <td style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}}><label>Active</label></td>
      <td style={{background:'#efefef',textAlign:'center'}}><button type="button" class="btn btn-primary border-0" style={{backgroundColor:'#ff3300',fontFamily:'cursive'}}>Join</button></td>
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}} /></td>
      <td style={{background:'#efefef'}}><a class="link-offset-2 link-underline link-underline-opacity-0" style={{color:'#808080  ',fontFamily:'cursive'}} href="#">Location</a></td>
      <td style={{background:'#efefef'}}><input type="" class='border-0' placeholder='Org name' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
      <td style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}}><label>Active</label></td>
      <td style={{background:'#efefef',textAlign:'center'}}><button type="button" class="btn btn-primary border-0" style={{backgroundColor:'#ff3300',fontFamily:'cursive'}}>Join</button></td>

    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}} /></td>
      <td style={{background:'#efefef'}}><a class="link-offset-2 link-underline link-underline-opacity-0" style={{color:'#808080  ',fontFamily:'cursive'}} href="#">Location</a></td>
      <td style={{background:'#efefef'}}><input type="" class='border-0' placeholder='Org name' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
      <td style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}}><label>Active</label></td>
      <td style={{background:'#efefef',textAlign:'center'}}><button type="button" class="btn btn-primary border-0" style={{backgroundColor:'#ff3300',fontFamily:'cursive'}}>Join</button></td>
    
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}} /></td>
      <td style={{background:'#efefef'}}><a class="link-offset-2 link-underline link-underline-opacity-0" style={{color:'#808080  ',fontFamily:'cursive'}} href="#">Location</a></td>
      <td style={{background:'#efefef'}}><input type="" class='border-0' placeholder='Org name' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
      <td style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}}><label>Active</label></td>
      <td style={{background:'#efefef',textAlign:'center'}}><button type="button" class="btn btn-primary border-0" style={{backgroundColor:'#ff3300',fontFamily:'cursive'}}>Join</button></td>
    
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}} /></td>
      <td style={{background:'#efefef'}}><a class="link-offset-2 link-underline link-underline-opacity-0" style={{color:'#808080  ',fontFamily:'cursive'}} href="#">Location</a></td>
      <td style={{background:'#efefef'}}><input type="" class='border-0' placeholder='Org name' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
      <td style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}}><label>Active</label></td>
      <td style={{background:'#efefef',textAlign:'center'}}><button type="button" class="btn btn-primary border-0" style={{backgroundColor:'#ff3300',fontFamily:'cursive'}}>Join</button></td>
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}} /></td>
      <td style={{background:'#efefef'}}><a class="link-offset-2 link-underline link-underline-opacity-0" style={{color:'#808080  ',fontFamily:'cursive'}} href="#">Location</a></td>
      <td style={{background:'#efefef'}}><input type="" class='border-0' placeholder='Org name' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
      <td style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}}><label>Active</label></td>
      <td style={{background:'#efefef',textAlign:'center'}}><button type="button" class="btn btn-primary border-0" style={{backgroundColor:'#ff3300',fontFamily:'cursive'}}>Join</button></td>
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}} /></td>
      <td style={{background:'#efefef'}}><a class="link-offset-2 link-underline link-underline-opacity-0" style={{color:'#808080  ',fontFamily:'cursive'}} href="#">Location</a></td>
      <td style={{background:'#efefef'}}><input type="" class='border-0' placeholder='Org name' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
      <td style={{background:'#efefef',fontFamily:'cursive',color:'#808080'}}><label>Active</label></td>
      <td style={{background:'#efefef',textAlign:'center'}}><button type="button" class="btn btn-primary border-0" style={{backgroundColor:'#ff3300',fontFamily:'cursive'}}>Join</button></td>
    </tr>
  </tbody>
</table>
</div>
          </div><br/>
        </section>
        <section className='app1'>
         <div className='bb1'>
          <div class='container'  style={{backgroundColor:'#ff8450',textAlign:'center',color:'white'}}>
            <div class='row'>
              <div class='col-md-6 mt-2' >
                 <label>Confirm Registration</label>
              </div>
            </div>
          </div>
          <form onSubmit={submit}>
            <div className='bb2'>
            <input type="text" class="form-control" onChange={change} name='username' data={data.username} style={{background:'rgba(239,239,239,255)'}} id="exampleFormControlInput1" placeholder="Username"/>
          <input type="text" class="form-control" onChange={change} name='age' data={data.age} style={{background:'rgba(239,239,239,255)'}} id="exampleFormControlInput1" placeholder="Age"/>
          <input type="text" class="form-control" onChange={change} name='location' data={data.location} style={{background:'rgba(239,239,239,255)'}} id="exampleFormControlInput1" placeholder="Location"/><br/>
          <button type="submit" class="btn btn-primary">Change</button>
          
            </div>
            </form>
         </div>
         
        </section>
    </div>
  )
}

export default Bloodcampdetails
import React, {useState} from 'react'
import img6 from './Image/thing.jpeg'
import Footer from './Inc/Footer'
function Donate() {
  const[data,setdata]=useState({donate:''})
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
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img6} class="d-block w-100" style={{height:'400px'}} alt="..."/>
    </div>
    
    </div>
  </div>
        </section>

        <section className='app1'>
           <div class='reg2'>
           <div class='container' style={{background:'#efefef'}} >
           <div class="small-4 cell text-left "> 
                    <label for="input-label" 
                           class="text-left " style={{backgroundColor:'blue',textAlign:'left'}}>Donate 
                    </label> 
                </div> 
           
           </div><br/>
   
             <div class='regcontainer1'>
              <form onSubmit={submit}>
             <input type="text" class="form-control" onChange={change} name='donate' data={data.donate}  style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Enter your contribution"/><br/>
             <button type="submit" class="btn btn-primary" style={{width:'100px'}}>Pay</button> <br/>
             </form>
             </div>
           </div>
           
        </section>
        <section>
          <div class='container'>
          <table class="table table-borderless">
  <thead >
    <tr >
      
      <th scope="col" style={{background:' #ff3300',fontFamily:'cursive'}}>Date</th>
      <th scope="col" style={{background:' #ff3300',textAlign:'center',fontFamily:'cursive'}}>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#707070'}}  /></td>
      <td style={{background:'#efefef',textAlign:'right'}}><input type="" class='border-0' placeholder=' 20k' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#707070'}}  /></td>
    <td style={{background:'#efefef',textAlign:'center'}}><input type="" class='border-0' placeholder='20k' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#707070'}}  /></td>
    <td style={{background:'#efefef',textAlign:'center'}}><input type="" class='border-0' placeholder='20k' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#707070'}}  /></td>
    <td style={{background:'#efefef',textAlign:'center'}}><input type="" class='border-0' placeholder='20k' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#707070'}}  /></td>
    <td style={{background:'#efefef',textAlign:'center'}}><input type="" class='border-0' placeholder='20k' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#707070'}}  /></td>
    <td style={{background:'#efefef',textAlign:'center'}}><input type="" class='border-0' placeholder='20k' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type="date" class='border-0' style={{background:'#efefef',fontFamily:'cursive',color:'#707070'}}  /></td>
    <td style={{background:'#efefef',textAlign:'center'}}><input type="" class='border-0' placeholder='20k' style={{background:'#efefef',fontFamily:'cursive'}} /></td>
    </tr>
  </tbody>
</table>
          </div><br/>
        </section><br/><br/><br/><br/><br/>
       <Footer/> 
    </div>
  )
}

export default Donate
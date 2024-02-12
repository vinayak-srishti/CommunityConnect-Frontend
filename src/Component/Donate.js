import React from 'react'
import img6 from './Image/thing.jpeg'
import Footer from './Inc/Footer'
function Donate() {
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
           <div class="input-group mb-3" >
  <button class="btn btn-outline-secondary" style={{background:'blue',color:'white'}} type="button" id="button-addon1">Donate</button>
  <input type="text" class="form-control" style={{background:'#efefef'}} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>

             <div class='regcontainer1'>
             <input type="text" class="form-control" style={{background:'#efefef'}} id="exampleFormControlInput1" placeholder="Enter your contribution"/><br/>
             <button type="button" class="btn btn-primary" style={{width:'100px'}}>Pay</button> <br/>
             </div>
           </div>
           
        </section>
        <section>
          <div class='container'>
          <table class="table">
  <thead >
    <tr >
      
      <th scope="col" style={{background:' #ff3300'}}>Date</th>
      <th scope="col" style={{background:' #ff3300',textAlign:'center'}}>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td style={{background:'#efefef'}}><input type="date"  />
</td>
      <td style={{background:'#efefef',textAlign:'center'}}>20k</td>
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type='date'/></td>
      <td style={{background:'#efefef',textAlign:'center'}}>20k</td>

    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type='date'/></td>
      <td style={{background:'#efefef',textAlign:'center'}}>20k</td>  
    
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type='date'/></td>
      <td style={{background:'#efefef',textAlign:'center'}}>20k</td>  
    
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type='date'/></td>
      <td style={{background:'#efefef',textAlign:'center'}}>20k</td>  
    
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type='date'/></td>
      <td style={{background:'#efefef',textAlign:'center'}}>20k</td>  
    
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type='date'/></td>
      <td style={{background:'#efefef',textAlign:'center'}}>20k</td>  
    
    </tr>
    <tr>
    <td style={{background:'#efefef'}}><input type='date'/></td>
      <td style={{background:'#efefef',textAlign:'center'}}>20k</td>  
    
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
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="navbar " style={{backgroundColor:'#630330'}} >
  <div class="container-fluid justify-content-around ">
    <a class="navbar-brand " style={{color:'yellow',fontSize:'30px'}}  href="#"> COMMUNITY</a>

       
      <ul class="nav mx-5 " >
        <li class="nav-item   " >
          <a class="nav-link  " style={{color:'white',textAlign:'center'}}  href="#">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" style={{color:'white'}} aria-current="page" href="./About">About</a>
          
        </li>
        <li class="nav-item ">
          <a class="nav-link active" style={{color:'white'}} aria-current="page" href="#">Donate</a>
        </li>
       </ul>
</div>
</nav>
    </div>
  )
}

export default Navbar
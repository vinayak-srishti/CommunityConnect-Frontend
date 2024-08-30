import React from 'react'
import img from '../Images/download.png'

function AdminNavbar() {
  return (
    <div>
      <nav class="navbar "  style={{backgroundColor:'#630330'}}>
  <div class="container">
    <a class="navbar-brand justify-content-left" href="#" >
      <img src={img} alt="Bootstrap" width="30" height="24"/>
      <span class="navbar-brand mb-0 h1" style={{color:'white'}}>Community Connect</span>

    </a>
  </div>
</nav>
    </div>
  )
}

export default AdminNavbar
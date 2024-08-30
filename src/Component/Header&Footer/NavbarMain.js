import React from 'react'

function NavbarMain() {
  return (
    <div>
      <nav class="navbar " style={{ backgroundColor: '#630330' }} >
        <div class="container-fluid justify-content-around ">
          <a class="navbar-brand " style={{ color: 'white', fontSize: '30px' }} href="#"> COMMUNITY</a>
          <ul class="nav mx-5 " >
            <li class="nav-item   " >
              <a class="nav-link  " style={{ color: 'white', textAlign: 'center' }} href="/userhome">Home</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" style={{ color: 'white' }} aria-current="page" href="/about">About</a>

            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" style={{ color: 'white' }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/userlogin">User</a></li>
                <li><a class="dropdown-item" href="/orphanagelogin">Orphanage</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavbarMain
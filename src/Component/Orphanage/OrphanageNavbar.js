import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function OrphanageNavbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <div>
      <nav class="navbar " style={{ backgroundColor: '#630330' }} >
        <div class="container-fluid justify-content-around ">
          <a class="navbar-brand " style={{ color: 'white', fontSize: '30px' }} href="#"> COMMUNITY</a>


          <ul class="nav mx-5 " >
            <li class="nav-item   " >
              <a class="nav-link  " style={{ color: 'white', textAlign: 'center' }} href="/orphanagehome">Home</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" style={{ color: 'white' }} aria-current="page" href="/orphanagelistview">Orphanages</a>

            </li>
            <li class="nav-item ">
              <a class="nav-link active" style={{ color: 'white' }} aria-current="page" href="/donationrequest">Request</a>

            </li>
            <li class="nav-item ">
              <a class="nav-link active" style={{ color: 'white' }} aria-current="page" href="/viewdonation">View</a>
            </li>

          </ul>

          {user ? (
            <Link className="navbar-brand" to={`/orphanageprofile/${user.OrphanageId}`}>

              <img src={'http://localhost:4000/' + user.image?.filename} alt="Profile" width="40" height="34" className="d-inline-block align-text-top rounded-circle" />
              <h6 style={{ color: 'white' }}>{user.OrphanageName}</h6>
            </Link>
          ) : (
            <Link className="nav-link" style={{ color: 'white' }} to="/login">Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}

export default OrphanageNavbar
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import img from '../Images/download.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);
  return (
    <div>
       <nav class="navbar " style={{backgroundColor:'#630330'}} >
  <div class="container-fluid justify-content-around ">
    <a class="navbar-brand " style={{color:'white',fontSize:'30px'}}  href="#"> COMMUNITY</a>

       
      <ul class="nav mx-5 " >
        <li class="nav-item   " >
          <a class="nav-link  " style={{color:'white',textAlign:'center'}}  href="/userhome">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" style={{color:'white'}} aria-current="page" href="/about">About</a>
          
        </li>
        <li class="nav-item ">
          <a class="nav-link active" style={{color:'white'}} aria-current="page" href="/orphanagelist">Orphanages</a>
          
        </li>
        <li class="nav-item ">
          <a class="nav-link active" style={{color:'white'}} aria-current="page" href="/pendingdonation">Donate</a>
        </li>
        
       </ul>
       {user ? (
        
            <Link className="navbar-brand" to={`/userprofile/${user.UserId}`}>
              <img src={img} alt="Profile" width="40" height="30" className="d-inline-block align-text-top rounded-circle" />
              <h6 style={{color:'white'}}>{user.FirstName}</h6>
            </Link>
          ) : (
            <Link className="nav-link" style={{ color: 'white' }} to="/login">Login</Link>
          )}
</div>
</nav>
    </div>
  )
}

export default Header
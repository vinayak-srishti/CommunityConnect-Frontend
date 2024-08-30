import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../Header&Footer/Header'
import img1 from '../Images/loginimg.jpg'
import Footer from '../Header&Footer/Footer'
import { useNavigate } from 'react-router-dom'

function UserLogin() {
  const [user]=useState(null)
  const navigate = useNavigate()

  const [data, setdata] = useState({ Email: '', Password: '' })
  const change = (a) => {
    console.log(a)
    setdata({ ...data, [a.target.name]: a.target.value })
  }
  console.log(data);
  const onsub = (b) => {
    b.preventDefault()
    axios.post('http://localhost:4000/userlogin', data)
    
      .then((result) => {
        if (result.data.status == "200") {
          //console.log("Login", result)
          localStorage.setItem('user', JSON.stringify(result.data.user))
          alert("Login Successfully")
          navigate('/userhome')
        }
        else if (result.data.status == "500") {
          console.log("Password not found")
          alert("Password not found")
        }
        else {
          alert("user not found")
        }

      })
    console.log('save')
    
  }
  return (
    <div>
      <section>
        <Header user={user} />
      </section>
      <section className='login'>
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
          <div className="row w-75 shadow-lg">
            <div className="col-md-6 p-5 bg-light d-flex flex-column justify-content-center">
              <h1 className="mb-4">Login</h1>
              <form onSubmit={onsub}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" onChange={change} value={data.Email} name='Email' id="email" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" onChange={change} value={data.Password} name='Password' id="password" />
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                
                <button type="submit"  className="btn btn-primary btn-block">Login</button>
                <p style={{textAlign:'center',marginTop:'20px'}}>Don't have an account <a class="link-offset-2 link-underline link-underline-opacity-0" href="/usersignup">Sign Up</a></p>
              </form>
            </div>
            <div className="col-md-6 p-5  text-white d-flex flex-column justify-content-center">
              <h2 className="mb-4"></h2>
              <img src={img1} />
              <p className="lead"></p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default UserLogin
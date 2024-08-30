import React, {useState,useEffect} from 'react'
import Header from '../Header&Footer/Header'
import Footer from '../Header&Footer/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UserSignupForm() {
  const navigate=useNavigate()
  const [data, setdata] = useState({ FirstName: '', LastName: '', Gender: '', Age: '', Email: '', Password: '', Street: '', City: '', Pincode: '', PhoneNumber:'' })
  const change=(b)=>{
    
   console.log(b)
    setdata({...data,[b.target.name]:b.target.value})
  }

  console.log(data)
  
  const onsubmit = (b) => {
    b.preventDefault()
    
    axios.post('http://localhost:4000/addDetails', data)

      .then((result) => {
        console.log("Registered", result)
        alert("Registered Successfully")
        navigate('/userlogin')
      })

    console.log("saved")
  }
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <div className='register'>
          <div className='reg'>
            <h4>Register</h4>
            <form onSubmit={onsubmit}>
            <div class='row'>
              <div class='col-6'>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" onChange={change} value={data.FirstName} name='FirstName' placeholder="name@example.com" />
                  <label for="floatingInput">First Name</label>
                </div>
                
                  <select class="form-select mb-3" aria-label="Default select example" onChange={change} value={data.Gender} name='Gender' style={{ height: '57px' }}>
                    <option selected>Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Others</option>
                  </select>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" onChange={change} value={data.Email} name='Email' placeholder="name@example.com" />
                    <label for="floatingInput">Email</label>
                  </div>
               
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingPassword" onChange={change} value={data.Street} name='Street' placeholder="Password" />
                  <label for="floatingPassword">Street</label>
                </div>
                <div class="form-floating">
                  <input type="number" class="form-control" id="floatingPassword" onChange={change} value={data.Pincode} name='Pincode' placeholder="Password" />
                  <label for="floatingPassword">Pincode</label>
                </div>
              </div>
              <div class='col-6'>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" onChange={change} value={data.LastName} name='LastName' placeholder="name@example.com" />
                  <label for="floatingInput">Last Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="number" class="form-control" id="floatingPassword" onChange={change} value={data.Age} name='Age' placeholder="Password" />
                  <label for="floatingPassword">Age</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={change} value={data.Password} name='Password' />
                  <label for="floatingInput">Password</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingPassword" onChange={change} value={data.City} name='City' placeholder="Password" />
                  <label for="floatingPassword">City</label>
                </div>
                <div class="form-floating">
                  <input type="number" class="form-control" id="floatingPassword" onChange={change} value={data.PhoneNumber} name='PhoneNumber' placeholder="Password" />
                  <label for="floatingPassword">Phone Number</label>
                </div>

              </div>

            </div><br />
            <div class='text-center'>
              <button type="submit" class="btn btn-primary" style={{ width: '200px' }}>Sign Up</button>
            </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default UserSignupForm
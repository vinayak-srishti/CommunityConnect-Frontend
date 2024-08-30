import React, { useState,useEffect } from 'react'
import Header from '../Header&Footer/Header'
import Footer from '../Header&Footer/Footer'
import axios from 'axios'
import OrphanageNavbar from './OrphanageNavbar'
import { useNavigate } from 'react-router-dom'

function OrphanageSignupForm() {
    const navigate=useNavigate()
    const [orpdata,setorpdata]=useState({OrphanageName:'',YearOfEstablishment:'',Email:'',Password:'',Purpose:'',PhoneNumber:'',OrphanageLicenseNo:'',Street:'',City:'',Pincode:'',image:null})
    const change=(b)=>{
        const { name, value } = b.target;
        if(b.target.name === "image"){
          // handleImageUpload(e);
          setorpdata({...orpdata,image:b.target.files[0]});
      }else {
          setorpdata({...orpdata,[b.target.name]:b.target.value})
      }
    }
      useEffect(() => {
        // axios.post('http://localhost:4000/addDetails',data)
        // .then((result)=>{
        //   console.log("Registered",result)
        // })
    
      })
    
      console.log(orpdata)
      
      const submit = (b) => {
        b.preventDefault()
        
        
        axios.post('http://localhost:4000/addOrphanageDetails', orpdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
    
          .then((result) => {
            console.log("Registered", result)
            alert("Registered Successfully")
            navigate('/orphanagelogin')
          })
    
        console.log("saved")
    
        //  axios.post('https://jsonplaceholder.typicode.com/posts',data)
        //  .then((result)=>{
        //    console.log(result)
        //  })
        //  .catch((error)=>{
        //    console.log(error)
        //  })
      }
    return (
        <div>
            <section>
                <OrphanageNavbar />
            </section>
            <section class='orphansign'>
                <div class='orphansign1'>
                    < h4>Register</h4>
                    <form onSubmit={submit}>
                    <div class='row'>
                        <div class='col-md-6 p-5 d-flex flex-column '>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" onChange={change} value={orpdata.OrphanageName} name='OrphanageName' placeholder="name@example.com" />
                                <label for="floatingInput">Orphanage Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control pb-2" id="floatingPassword"onChange={change} value={orpdata.Email} name='Email' placeholder="Password" />
                                <label for="floatingPassword">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control " id="floatingInput" onChange={change} value={orpdata.Purpose} name='Purpose' placeholder="name@example.com" />
                                <label for="floatingInput">Purpose of your Orphanage</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword" onChange={change} value={orpdata.Street} name='Street' placeholder="Password" />
                                <label for="floatingPassword">Street</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatingPassword" onChange={change} value={orpdata.OrphanageLicenseNo} name='OrphanageLicenseNo' placeholder="Password" />
                                <label for="floatingPassword">Orphanage Licence No</label>
                            </div>
                        </div>
                        <div class='col-md-6 p-5'>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" onChange={change} value={orpdata.YearOfEstablishment} name='YearOfEstablishment' placeholder="name@example.com" />
                                <label for="floatingInput">Year of establishment</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPassword" onChange={change} value={orpdata.Password} name='Password' placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="phone" class="form-control" id="floatingPassword" onChange={change} value={orpdata.PhoneNumber} name='PhoneNumber' placeholder="Password" />
                                <label for="floatingPassword">Phone Number</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword" onChange={change} value={orpdata.City} name='City' placeholder="Password" />
                                <label for="floatingPassword">City</label>
                            </div>
                            <div class="form-floating">
                                <input type="pincode" class="form-control" id="floatingPassword" onChange={change} value={orpdata.Pincode} name='Pincode' placeholder="Password" />
                                <label for="floatingPassword">Pincode</label>
                            </div>
                        </div>
                        <div class="mb-3 px-5 " >
                            <label for="formFile" class="form-label">Choose File</label>
                            <input class="form-control" type="file" onChange={change} name='image' id="formFile" />
                        </div>
                    </div>
                    <div class='text-center'>
                        <button type="submit" class="btn btn-primary" style={{ width: '200px' }}>Sign Up</button>
                    </div>
                    </form>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default OrphanageSignupForm
import React, {useState} from 'react'
import Footer from '../Header&Footer/Footer'
import Header from '../Header&Footer/Header'
import AdminNavbar from './AdminNavbar'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const navigate=useNavigate()
    const [data, setdata] = useState({ Email: '', password: '' })
    const change = (a) => {
        console.log(a)
        setdata({ ...data, [a.target.name]: a.target.value })
    }
    console.log(data)
    const submit = (a) => {
        a.preventDefault()
        if(data.Email=='admin@gmail.com' && data.password=='admin@123')
            {
                console.log('Login Successfull',data)
                alert("Login Successfull")
                navigate("/adminmain")
            }
            else if(data.Email!='admin@gmail.com'){
                alert("Email is incorrect")
            }
            else if(data.password!='admin@123'){
                alert('Password is incorrect')
            }
            else if(data.Email=="" && data.password=="")
                {
                    alert("Email and password is empty")
                }
            
        console.log('saved')
    }
  return (
    <div>
        <section>
            <AdminNavbar/>
        </section>
        <section>
                <form onSubmit={submit}>
                <div className='admin'>
                    <div className='loginContainer'>
                        <div className=''>
                            <h4 class='mt-4' style={{textAlign: 'center',fontFamily:'fantasy' }}>Admin Login</h4>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" style={{ width: "300px" }} onChange={change} name='Email' value={data.Email} id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <label for="inputPassword5" class="form-label">Password</label>
                            <input type="password" id="inputPassword5" class="form-control" style={{ width: "300px" }} onChange={change} name='password' value={data.password} aria-describedby="passwordHelpBlock" />
                            <div class='text-center mt-4 mb-4 '>
                                <button class="btn btn-primary border-0" style={{ background: '#630330', width: '200px' }} type="submit">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </section>
            <section>
                <Footer/>
            </section>
    </div>
  )
}

export default AdminLogin
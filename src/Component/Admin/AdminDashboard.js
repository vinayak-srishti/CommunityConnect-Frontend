import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUsers, FaHome } from 'react-icons/fa'
import './Admin.css'

function AdminDashboard() {
    const [user,setuser]=useState([])
    const [orphanage,setorphanage]=useState([])
    const [error,setError]=useState(null)
    useEffect(()=>{
        const fetchDetails = async () => {
            try {
              const response = await axios.post("http://localhost:4000/viewuserDetails")
              console.log(response)
              setuser(response.data.msg)
    
              const responseone = await axios.post("http://localhost:4000/vieworphanagedetails")
              console.log(responseone)
              setorphanage(responseone.data.msg)
            }
    
            catch (error) {
              console.error("Error fetching", error)
            }
          }
          fetchDetails()
        }, [])
    
    return (
        <div className="dashboard-container">
        <div className="main-content">
                <h3 className="dashboard-title">Admin Dashboard</h3>
                <div className="cards-container">
                    <div className="card1 card-users">
                        <div className="card-icon">
                            <FaUsers />
                        </div>
                        <div className="card-info">
                            <h5 style={{color:'white'}}>Total Users</h5>
                            <h1>{user.length}</h1>
                        </div>
                    </div>
                    <div className="card1 card-orphanages">
                        <div className="card-icon">
                            <FaHome />
                        </div>
                        <div className="card-info">
                            <h5 style={{color:'white'}}>Total Orphanages</h5>
                            <h1>{orphanage.length}</h1>
                        </div>
                    </div>
                </div>
                

                {error && (
                    <div className="alert alert-danger" role="alert" style={{ marginTop: '20px' }}>
                        An error occurred while fetching data: {error.message}
                    </div>
                )}
            </div>
        </div>

    )
}

export default AdminDashboard
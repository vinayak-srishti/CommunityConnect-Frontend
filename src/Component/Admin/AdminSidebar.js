import React, { useState } from 'react'
import img from '../Images/Admin.png'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

function AdminSidebar() {
  const navigate=useNavigate()
  const handleLogout = () => {
    // Clear any session data, such as tokens, that were used for authentication
    localStorage.removeItem('adminToken'); // Assuming the token is stored as 'adminToken'
    
    // Redirect to the admin login page
    navigate('/adminlogin');
  };
 

  return (
    <div>
      <section>
      <div className="sidebar-container">
      <div className="profile-section">
        <img src={img} alt="Admin" className="profile-pic" />
        <h5 className="admin-name">Admin</h5>
      </div>
      <div className="sidebar-links">
        <a className="sidebar-link" href="adminmain">Overview</a>
        <a className="sidebar-link" href="adminusermain">User</a>
        <a className="sidebar-link" href="adminorphanagemain">Orphanage</a>
        <a className="sidebar-link" href="admindonationmain">Donation Request</a>
        
        <button 
          type="button" 
          className="logout-btn" 
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
      </section>       
    </div>
  )
}

export default AdminSidebar
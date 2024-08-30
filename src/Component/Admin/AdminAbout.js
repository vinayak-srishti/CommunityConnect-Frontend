import React from 'react'
import About from '../Pages/About'
import AdminSidebar from './AdminSidebar'

function AdminAbout() {
  return (
    <div>
      <div class='row'>
                <div class='col-md-3'>
                  <AdminSidebar/>
                </div>
                <div class='col-md-9'>
                  <About/>
                </div>
            </div>  
    </div>
  )
}

export default AdminAbout
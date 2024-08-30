import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminOrphanageManagement from './AdminOrphanageManagement'

function AdminOrphanageMain() {
  return (
    <div>
       <div class='row'>
        <div class='col-md-3'>
         <AdminSidebar/>
        </div>
        <div class='col-md-9'>
          <AdminOrphanageManagement/>
        </div>
        </div> 
    </div>
  )
}

export default AdminOrphanageMain
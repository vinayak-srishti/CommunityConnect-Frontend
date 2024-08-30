import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminUserManagement from './AdminUserManagement'

function AdminUserMain() {
  return (
    <div>
            <div class='row'>
                <div class='col-md-3'>
                  <AdminSidebar/>
                </div>
                <div class='col-md-9'>
                  <AdminUserManagement/>
                </div>
            </div>
    </div>
  )
}

export default AdminUserMain
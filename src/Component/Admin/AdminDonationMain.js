import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminDonationManagement from './AdminDonationManagement'

function AdminDonationMain() {
  return (
    <div>
        <div class='row'>
            <div class='col-md-3'>
                <AdminSidebar/>
            </div>
            <div class='col-md-9'>
                <AdminDonationManagement/>
            </div>
        </div>
    </div>
  )
}

export default AdminDonationMain
import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'

function AdminMain() {
    return (
        <div>
            <div class='row'>
                <div class='col-3'>
                    <AdminSidebar />
                </div>
                <div class='col-9'>
                    <AdminDashboard />
                </div>
            </div>


        </div>
    )
}

export default AdminMain
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../Style/dashboard.css'

const Layout = () => {
    return (
        <div className='dashboard college-dashboard'>
            <div className='left'>
                <h2>Quicreds</h2>
                {/* <NavLink to='/' className='left-ele'>
                        Home
                </NavLink> */}  
                <NavLink className='left-ele' to='/'>Dashboard</NavLink>
                <NavLink className='left-ele' to='student-expenses'>Student's Expenses</NavLink>
                <div className='bar'></div>
                {/* <h4>Profile</h4> */}
                <NavLink className='left-ele' to='update-college-details'>College Details</NavLink>
                <NavLink className='left-ele' to='add-student'>Add Student</NavLink>
                    <div className='left-ele logout'>
                        Logout
                    </div>
                {/* <NavLink to='/'>
                </NavLink> */}
            </div>
            <div className='right'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout




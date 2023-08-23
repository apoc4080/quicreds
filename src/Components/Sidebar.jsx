import React, { useState } from 'react';
import '../Style/sidebar.css'; // Make sure the path is correct
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <div className="sidebar">
            <div>
                <div className="logo-container">
                    <img src="logo.png" alt="Logo" className="logo" />
                </div>
                <ul>

                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <li >
                            <img src="dashboard.svg" alt="Dashboard Icon" className="icon" />
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/expenses" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <li>
                            <img src="expenses.svg" alt="Expenses Icon" className="icon" />
                            Student's Expenses
                        </li>
                    </Link>
                    <div className="sidebar-divider"></div>

                    <Link to="/details" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <li>
                            <img src="college.svg" alt="College Icon" className="icon" />
                            College Details
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="logout-button-container">
                <button className="logout-button">Logout</button>
            </div>
        </div>
    );
}

export default Sidebar;

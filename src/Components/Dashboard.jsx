import React from "react";
import "../Style/dashboard.css";

const outlets = [
    { name: 'All Night Canteen', status: 'Open', image: 'image-16.png' },
    { name: 'Another Outlet', status: 'Closed', image: 'image-16-2.png' },
    { name: 'Another Outlet', status: 'Closed', image: 'image-16-2.png' },
    { name: 'Another Outlet', status: 'Closed', image: 'image-16-2.png' },
    { name: 'Another Outlet', status: 'Closed', image: 'image-16-2.png' },
    { name: 'Another Outlet', status: 'Closed', image: 'image-16-2.png' },
    { name: 'Another Outlet', status: 'Closed', image: 'image-16-2.png' },
];

const Dashboard = () => {
    return (
        <div className="center-div">
            <div className="title">Dashboard</div>
            <div className="content">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Outlet Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {outlets.map((outlet, index) => (
                            <tr key={index}>
                                <td><img src='dummyOutlet.png' alt={outlet.name} /></td>
                                <td>{outlet.name}</td>
                                <td>
                                <label class="switch">
                                    <input class="switch-input" type="checkbox"></input>
                                    <span class="switch-button"></span>
                                </label>
                                </td>
                                <td>
                                    <button className="view-button">View More</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;

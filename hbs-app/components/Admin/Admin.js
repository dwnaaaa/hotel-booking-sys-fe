import React from 'react';
import Layout from '../Layout/Layout';
import './Admin.css';
import Dashboard from '../Dashboard/Dashboard';

const Admin = () => {
  return (
    <Layout>
        <div className="admin-panel-container">

        <div className="supervisor-panel-container">
            <h1>Supervisor Panel</h1>
            
            <a href="/payroll" className="payroll-link">
            <div className="payroll-button-container">
            <button className="payroll-button">
                Payroll

                <svg className="cash-out-icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6667 11C20.5513 10.7213 22 9.04574 22 7.02036C22 4.79998 20.2589 3 18.1111 3H5.88889C3.74112 3 2 4.79998 2 7.02036C2 9.04574 3.44873 10.7213 5.33333 11" stroke="#FFFFFF" stroke-width="1.2"/>
                <path d="M12 6V13M12 13L14 10.6667M12 13L10 10.6667" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 10C5 8.11438 5 7.17157 5.58579 6.58579C6.17157 6 7.11438 6 9 6H15C16.8856 6 17.8284 6 18.4142 6.58579C19 7.17157 19 8.11438 19 10V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V10Z" stroke="#FFFFFF" stroke-width="1.2"/>
                <path d="M5 17H19" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </button>
        </div>
            </a>

            

        </div>

        <div className="admin-container">

        {/* <a href="/dashboard" className="admin_card"> */}
        <a className="admin_card">
        <div className="card-image-container">
            <div className="image-wrapper">
            <img src="images\employee\frontdesk.jpg" alt="Front Desk" />
            </div>
        </div>

        <div className="card-content">
        <h2 className="card-title">Front Desk</h2>
            {/* <p className="card-description">Manages guest bookings, check-ins, and check-outs.</p> */}
        </div>
        </a>

        {/* <a href="/dashboard" className="admin_card"> */}
        <a className="admin_card">
        <div className="card-image-container">
            <div className="image-wrapper">
            <img src="images\employee\housekeeping.jpg" alt="Housekeeping" />
            </div>
        </div>

        <div className="card-content">
        <h2 className="card-title">Housekeeping</h2>
            {/* <p className="card-description">Responsible for room cleaning, minibar charges, and assessing damages for billing.</p> */}
        </div>
        </a>

        {/* <a href="/dashboard" className="admin_card"> */}
        <a className="admin_card">
        <div className="card-image-container">
            <div className="image-wrapper">
            <img src="images\employee\kitchen.jpg" alt="Kitchen" />
            </div>
        </div>

        <div className="card-content">
        <h2 className="card-title">Kitchen</h2>
            {/* <p className="card-description">Handles charges for in-house dining, including meals, alcohol, and special requests.</p> */}
        </div>
        </a>

        {/* <a href="/dashboard" className="admin_card"> */}
        <a className="admin_card">
        <div className="card-image-container">
            <div className="image-wrapper">
            <img src="images\employee\concierge.jpg" alt="Concierge" />
            </div>
        </div>

        <div className="card-content">
        <h2 className="card-title">Concierge</h2>
            {/* <p className="card-description">Manages charges for additional services like spa treatments, transportation, and more.</p> */}
        </div>
        </a>

        </div>

    </div>

    <Dashboard />
    </Layout>
  );
}

export default Admin;

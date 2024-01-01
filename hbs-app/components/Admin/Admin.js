import React from 'react';
import Layout from '../Layout/Layout';
import './Admin.css'; // Make sure the CSS file is linked

const Admin = () => {
  return (
    <Layout>
        <div className="admin-panel-container">

        <h1>Admin Panel</h1>
        <div className="admin-container">
            <a href="/dashboard/frontdesk" className="card">
              <h2 className="card-title">Front Desk</h2>
            </a>
            <a href="/dashboard/housekeeping" className="card">
              <h2 className="card-title">Housekeeping</h2>
            </a>
            <a href="/dashboard/kitchen" className="card">
              <h2 className="card-title">Kitchen</h2>
            </a>
            <a href="/dashboard/concierge" className="card">
              <h2 className="card-title">Concierge</h2>
            </a>
        </div>

        </div>
        
    </Layout>
  );
}

export default Admin;

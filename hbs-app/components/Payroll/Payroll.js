import React from 'react'
import Layout from '../Layout/Layout'
import './Payroll.css';

const Payroll = () => {
  return (
    <Layout>
        <div className="payroll-container">
        <div className="payroll-column">Employee Name</div>
        <div className="payroll-column">Employee Type</div>
        <div className="payroll-column">Pay Period</div>
        <div className="payroll-column">Salary</div>
        {/* You can add your payroll data here */}
      </div>
      <button className="submit-button">Submit</button>
    </Layout>
  )
}

export default Payroll
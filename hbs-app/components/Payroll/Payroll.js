import React from 'react'
import Layout from '../Layout/Layout'
import './Payroll.css'

const Payroll = () => {
  // Example data, replace with real data
  const payrollData = [
    { number: "001", name: "John Doe", type: "Front Desk", period: "01/01/2024 - 01/15/2024", salary: "3000" },
    { number: "002", name: "Jane Smith", type: "Housekeeping", period: "01/01/2024 - 01/15/2024", salary: "1500" },
    // Add more payroll data here
  ];

  const totalSalary = payrollData.reduce((acc, employee) => acc + Number(employee.salary), 0);
  const employeeCount = payrollData.length;

  return (
    <Layout>

    <div className="outer-container">

      <div className="payroll-wrapper">
      <div className="payroll-container">
    <h1>Employees Payroll</h1>
        <table className="payroll-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Employee Type</th>
              <th>Pay Period</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((employee, index) => (
              <tr key={index}>
                <td>{employee.number}</td>
                <td>{employee.name}</td>
                <td>{employee.type}</td>
                <td>{employee.period}</td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="payroll-summary">

              <p>Number of Employees: {employeeCount}</p>
              <p>Total: ${totalSalary}</p>
        </div>

        <div className="submit-button-container">
            <button className="submit-button">
                Submit payroll

                <svg className="right-arrow-icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </button>
        </div>

      </div>
      </div>
    </div>


    </Layout>
  )
}

export default Payroll

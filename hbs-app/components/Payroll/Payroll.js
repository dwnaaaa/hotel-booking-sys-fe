'use client';

import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import './Payroll.css';
import Button from '../Dashboard/Buttons/Button';

// ... (previous code)

const Payroll = () => {
  const [editMode, setEditMode] = useState(false);
  const [editedSalaries, setEditedSalaries] = useState({});
  const [editableIndex, setEditableIndex] = useState(null);

  const handleEditClick = (index) => {
    // If the clicked icon is already in edit mode, disable it
    if (editableIndex === index) {
      setEditMode(false);
      setEditableIndex(null);
    } else {
      setEditMode(true);
      setEditableIndex(index);
    }
  };

  const handleSalaryChange = (index, event) => {
    setEditedSalaries((prevEditedSalaries) => ({
      ...prevEditedSalaries,
      [index]: event.target.value,
    }));
  };

  const handleSaveChanges = () => {
    // Handle saving changes to the state or server
    // You can use the editedSalaries state to update the actual state or perform other actions
    console.log("Saving changes:", editedSalaries);
    setEditMode(false);
    setEditableIndex(null);
  };

  // Example data, replace with real data
  const payrollData = [
    { number: "001", name: "John Doe", type: "Front Desk", salary: "3000", icon: <Button onClick={() => handleEditClick(0)} /> },
    { number: "002", name: "Jane Smith", type: "Housekeeping", salary: "1500", icon: <Button onClick={() => handleEditClick(1)} /> },
    // Add more payroll data here
  ];

  const totalSalary = payrollData.reduce((acc, employee, index) => {
    const editedSalary = editedSalaries[index];
    const salaryToAdd = editedSalary !== undefined ? Number(editedSalary) : Number(employee.salary);
    return acc + salaryToAdd;
  }, 0);

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
                  <th>Salary</th>
                  <th className='icon-column'></th>
                </tr>
              </thead>
              <tbody>
                {payrollData.map((employee, index) => (
                  <tr key={index}>
                  <td>{employee.number}</td>
                  <td>{employee.name}</td>
                  <td>{employee.type}</td>
                  <td>
                    {editMode && editableIndex === index ? (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '5px' }}>₱</span>
                        <input
                          type="number"
                          value={editedSalaries[index] !== undefined ? editedSalaries[index] : employee.salary}
                          onChange={(event) => handleSalaryChange(index, event)}
                        />
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '5px' }}>₱</span>
                        <input type="text" value={editedSalaries[index] !== undefined ? editedSalaries[index] : employee.salary} disabled />
                      </div>
                    )}
                  </td>
                  <td className='icon-column'>{employee.icon}</td>
                </tr>                
                ))}
              </tbody>
            </table>

            <div className="payroll-summary">
              <p>Number of Employees: {employeeCount}</p>
              <p>Total: ₱{totalSalary}</p>
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
  );
};

export default Payroll;

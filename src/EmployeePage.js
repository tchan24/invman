import React, { useState } from 'react';

function EmployeePage() {
  const [employees, setEmployees] = useState([
    {id: 1, name: 'Employee 1', email: 'email1@example.com', number: '1234567890', location: 'Office 1'},
    {id: 2, name: 'Employee 2', email: 'email2@example.com', number: '2345678901', location: 'Office 2'},
    {id: 3, name: 'Employee 3', email: 'email3@example.com', number: '3456789012', location: 'Office 3'},
    {id: 4, name: 'Employee 4', email: 'email4@example.com', number: '4567890123', location: 'Office 4'},
    // More employees here...
  ]);

  return (
    <div>
      <nav>
        <button>Toggle Sidebar</button>
        // Other navigation items
      </nav>
      <div id="sidebar">
        // Sidebar buttons
      </div>
      <div id="content">
        <h2>Employees</h2>
        <button>Add Employee</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Number</th>
              <th>Office Location</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.id}</td>
                <td>{employee.email}</td>
                <td>{employee.number}</td>
                <td>{employee.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeePage;

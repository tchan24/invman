import React from 'react';

function EmployeePage() {
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
            // Data to be populated here
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeePage;

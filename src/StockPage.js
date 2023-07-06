import React from 'react';

function StockPage() {
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
        <h2>Product Name (ID)</h2>
        <table>
          <thead>
            <tr>
              <th>Asset ID</th>
              <th>Current Location</th>
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Email/Number</th>
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

export default StockPage;

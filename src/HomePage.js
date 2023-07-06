import React from 'react';

function HomePage() {
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
        <h2>Products</h2>
        <table>
          <thead>
            <tr>
              <th>Product/Material ID</th>
              <th>Product Name</th>
              <th>Total Stock</th>
              <th>Holding Stock</th>
              <th>Incoming Stock</th>
              <th>Virtual Stock</th>
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

export default HomePage;

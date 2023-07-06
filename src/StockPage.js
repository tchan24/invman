import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function StockPage() {
  let { id } = useParams();
  const [product, setProduct] = useState({id: id, name: 'Product ' + id, assets: [
    {assetId: id + '_1', location: 'Location 1', employee: 'Employee 1', employeeId: '1', email: 'email@example.com'},
    {assetId: id + '_2', location: 'Location 2', employee: 'Employee 2', employeeId: '2', email: 'email@example.com'},
    // More assets here...
  ]});

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
        <h2>{product.name} ({product.id})</h2>
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
            {product.assets.map((asset) => (
              <tr key={asset.assetId}>
                <td>{asset.assetId}</td>
                <td>{asset.location}</td>
                <td>{asset.employee}</td>
                <td>{asset.employeeId}</td>
                <td>{asset.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StockPage;

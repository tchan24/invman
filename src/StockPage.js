import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function StockPage() {
  let { id } = useParams();
  //let location = useLocation();
  //let stockType = location.state.stockType;
  //let filteredAssets = product.assets.filter(asset => asset.stockType === stockType);

  const [product, setProduct] = useState({id: id, name: 'Product ' + id, assets: [
    {assetId: id + '_1', location: 'Location 1', employee: 'Employee 1', employeeId: '1', email: 'email1@example.com'},
    {assetId: id + '_2', location: 'Location 2', employee: 'Employee 2', employeeId: '2', email: 'email2@example.com'},
    {assetId: id + '_3', location: 'Location 3', employee: 'Employee 3', employeeId: '3', email: 'email3@example.com'},
    {assetId: id + '_4', location: 'Location 4', employee: 'Employee 4', employeeId: '4', email: 'email4@example.com'},
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

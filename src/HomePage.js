import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState([
    {id: 1, name: 'Product 1', total: 100, holding: 50, incoming: 25, virtual: 75},
    {id: 2, name: 'Product 2', total: 200, holding: 100, incoming: 50, virtual: 150},
    // More products here...
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
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><Link to={`/stock/${product.id}`}>{product.total}</Link></td>
                <td><Link to={`/stock/${product.id}`}>{product.holding}</Link></td>
                <td><Link to={`/stock/${product.id}`}>{product.incoming}</Link></td>
                <td><Link to={`/stock/${product.id}`}>{product.virtual}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState([
    {id: 1, name: 'Product 1', total: 100, holding: 50, incoming: 25, virtual: 75},
    {id: 2, name: 'Product 2', total: 200, holding: 100, incoming: 50, virtual: 150},
    {id: 3, name: 'Product 3', total: 300, holding: 150, incoming: 75, virtual: 225},
    {id: 4, name: 'Product 4', total: 400, holding: 200, incoming: 100, virtual: 300},
    {id: 5, name: 'Product 5', total: 500, holding: 250, incoming: 125, virtual: 375},
    {id: 6, name: 'Product 6', total: 600, holding: 300, incoming: 150, virtual: 450},
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
                {/* <td><Link to={`/stock/${product.id}`}>{product.total}</Link></td>
                <td><Link to={`/stock/${product.id}`}>{product.holding}</Link></td>
                <td><Link to={`/stock/${product.id}`}>{product.incoming}</Link></td>
                <td><Link to={`/stock/${product.id}`}>{product.virtual}</Link></td> */}
                <td><Link to={{pathname: `/stock/${product.id}`, state: {stockType: 'total'}}}>{product.total}</Link></td>
                <td><Link to={{pathname: `/stock/${product.id}`, state: {stockType: 'holding'}}}>{product.holding}</Link></td>
                <td><Link to={{pathname: `/stock/${product.id}`, state: {stockType: 'incoming'}}}>{product.incoming}</Link></td>
                <td><Link to={{pathname: `/stock/${product.id}`, state: {stockType: 'virtual'}}}>{product.virtual}</Link></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;

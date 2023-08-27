import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <nav>
        <button>Toggle Sidebar</button>
        {/* Other navigation items */}
      </nav>
      <div id="sidebar">
        <button>Home</button>
        <button>Products</button>
        <button>Stock</button>
        <button>Employees</button>
      </div>
      <h1>Products</h1>
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
          {products.map(product => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td><Link to={`/stock/${product.product_id}/total`}>{product.total_stock}</Link></td>
              <td><Link to={`/stock/${product.product_id}/holding`}>{product.holding_stock}</Link></td>
              <td><Link to={`/stock/${product.product_id}/incoming`}>{product.incoming_stock}</Link></td>
              <td><Link to={`/stock/${product.product_id}/virtual`}>{product.virtual_stock}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;

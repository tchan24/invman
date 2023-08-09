import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
              <td>{product.total_stock}</td>
              <td>{product.holding_stock}</td>
              <td>{product.incoming_stock}</td>
              <td>{product.virtual_stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;

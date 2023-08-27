import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import StockPage from './StockPage';
import EmployeePage from './EmployeePage';

function App() {
  return (
    <Router>
      <div className="sidebar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/employees">Employee Master</Link></li>
          <li>Settings</li> {/* Add Link when it's ready */}
        </ul>
      </div>
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/stock/:id/:type' element={<StockPage/>} />
        <Route path='/employees' element={<EmployeePage/>} />
      </Routes>
    </Router>
  );
}

export default App;

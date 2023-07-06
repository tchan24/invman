import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import HomePage from './HomePage';
import StockPage from './StockPage';
import EmployeePage from './EmployeePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/stock/:id' element={<StockPage/>} />
        <Route path='/employees' element={<EmployeePage/>} />
      </Routes>
    </Router>
  );
}

export default App;

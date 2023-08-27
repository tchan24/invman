import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: '',
    number: '',
    office_location: '',
    permission_level: ''
  });
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the employees:", error);
        setLoading(false);
      }
    }

    fetchEmployees();
  }, []);

  const handleAddEmployee = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('/api/employees', formData);

        // If the employee was added successfully, update the state with the new employee
        if (response.status === 200) {
            setEmployees(prevState => [...prevState, formData]);
            setFeedback('Employee added successfully!');
        } else {
            setFeedback('Error adding employee.');
        }
    } catch (error) {
        setFeedback(`Error: ${error.message}`);
    }

    // Reset the form data
    setFormData({
        name: '',
        id: '',
        email: '',
        number: '',
        office_location: '',
        permission_level: ''
    });
  };


  if (loading) return <p>Loading employees...</p>;

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
      <div id="content">
        <h2>Employees</h2>
        <button>Add Employee</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Number</th>
              <th>Office Location</th>
              <th>Permission Level</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.id}</td>
                <td>{employee.email}</td>
                <td>{employee.number}</td>
                <td>{employee.location}</td>
                <td>{employee.permission_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2>Add New Employee</h2>
          <form onSubmit={handleAddEmployee}>
            <div>
              <label>Name:</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label>ID:</label>
              <input 
                type="text" 
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Number:</label>
              <input 
                type="text" 
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Office Location:</label>
              <input 
                type="text" 
                value={formData.office_location}
                onChange={(e) => setFormData({ ...formData, office_location: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Permission Level:</label>
              <input
                type="text"
                value={formData.permission_level}
                onChange={(e) => setFormData({ ...formData, permission_level: e.target.value })}
                required
              />
            </div>
            <button type="submit">Add Employee</button>
          </form>
          {feedback && <p>{feedback}</p>}
        </div>
      </div>
    </div>
  );
}

export default EmployeePage;

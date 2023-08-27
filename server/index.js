const express = require('express');
const db = require('./db');

const app = express();
const port = 3001;

const cors = require('cors');
app.use(cors());
app.use(express.json());


app.get('/api/products', (req, res) => {
  db.any('SELECT * FROM Products')
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.get('/api/assets', (req, res) => {
  db.any('SELECT * FROM Assets')
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.get('/api/employees', (req, res) => {
  db.any('SELECT * FROM Employees')
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.post('/api/employees', async (req, res) => {
  try {
    const { name, id, email, number, office_location } = req.body;
    const result = await pool.query(`
      INSERT INTO employees (name, id, email, number, office_location) VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
      [name, id, email, number, office_location]
    );

    if(result.rows.length > 0) {
      res.json({ success: true, employee: result.rows[0] });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false });
  }
});

app.get('/api/employees', async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM employees");
    res.json(results.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});
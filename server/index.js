const express = require('express');
const db = require('./db');

const app = express();
const port = 3001;

const cors = require('cors');
app.use(cors());


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

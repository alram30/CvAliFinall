const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 5000;

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contact_form'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.use(express.json());
app.use(cors());

// Endpoint to add a comments
app.post('/add-comments', (req, res) => {
  const { name, rating, comments } = req.body;
  const query = 'INSERT INTO comments (name, rating, comments) VALUES (?, ?, ?)';
  db.query(query, [name, rating, comments], (err, result) => {
    if (err) throw err;
    res.status(201).send({ message: 'comments added' });
  });
});

// Endpoint to get all comments
app.get('/comments', (req, res) => {
  const query = 'SELECT * FROM comments ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

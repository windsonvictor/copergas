const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample data (in-memory database)
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

// Middleware to parse JSON
app.use(bodyParser.json());

// Endpoint to get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Endpoint to get a single user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Endpoint to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
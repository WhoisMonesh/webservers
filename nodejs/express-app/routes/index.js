const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.send('Home Page');
});

// About page route
router.get('/about', (req, res) => {
  res.send('About Page');
});

// API route
router.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);
});

module.exports = router;

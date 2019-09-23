const express = require('express');

// Create an Express router
const router = express.Router();

// For a get request to '/', render the 'form' template in the views folder:
router.get('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
});

// Handle form submission
router.post('/', (req, res) => {
  console.log(req.body);
  res.render('form', { title: 'Registration form' });
});

module.exports = router;

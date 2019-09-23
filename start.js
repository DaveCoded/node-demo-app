// Import the Express app
const app = require('./app');

// Start an Express server on port 3000
const server = app.listen(3000, () => {
  console.log(`Express is running on ${server.address().port}`);
});

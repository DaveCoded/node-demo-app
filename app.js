const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index');

// Initialise a new Express app
const app = express();

// Look in the views folder to get views!
app.set('views', path.join(__dirname, 'views'));
// Use Pug as a templating engine
app.set('view engine', 'pug');

/* Make post request data available in post body.
  using body-parser’s urlencoded method allows us to handle data sent as
  application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }));
// For a request to /something, look in the routes file
app.use('/', routes);

// export the Express app
module.exports = app;

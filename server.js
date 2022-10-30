// Server for MVC Tech Blog

// Requires path module
const path = require('path');
// Requires dotenv for sensitive info
require('dotenv').config();
// Requires express
const express = require('express');
// Requires controllers and all the routes in the folder
const routes = require('./controllers/');
// Requires sequelize to connect to the database
const sequelize = require('./config/connection');

// Initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

// Use express to part JSON and strings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Give the server the path to the routes
app.use(routes);

// Sets up connection to server, listens on selected port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on PORT: ' + PORT));
  });
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
// Handlebars helpers
const helpers = require('./utils/helpers');

// Handlebars template engine for front-end
const expressHandlebars = require('express-handlebars')
// Initialize handlebars for the html templates
const exphbs = expressHandlebars.create({helpers});

const session = require('express-session');

// Initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize sessions
const sess = {
  secret: 'bigbluedog',
  cookie: {
        // Session will automatically expire in 10 minutes
        expires: 10 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

// Give the server a path to the public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Set handlebars as the template engine for the server
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Use express to part JSON and strings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tell the app to use Express Session for the session handling
app.use(session(sess));

// Give the server the path to the routes
app.use(routes);

// Sets up connection to server, listens on selected port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on PORT: ' + PORT));
  });
// Dependencies
// Express.js connection
const router = require('express').Router();
// User, Post, Vote models
const { User, Post, Comment } = require('../../models');
// Express Session for the session data
const session = require('express-session');
// Authorization Helper
const authorize = require('../../utils/authorization');
// Sequelize store to save the session so the user can remain logged in
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Routes
// Get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
      .then(userData => res.json(userData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// GET user by id
router.get('/:id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'postContent', 'created_at']
        },
        {
            model: Comment,
            attributes: ['id', 'commentText', 'postId', 'userId', 'created_at'],
            include: {
                model: Post,
                attributes: ['title']
            }
        }
      ]
    })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with id of ' + id });
          return;
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Add a new user
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(userData => {
      req.session.save(() => {
        req.session.userId = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;

        res.json(userData);
    })
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Login route
router.post('/login', (req, res) => {
    User.findOne({
        where: {
        email: req.body.email
        }
    }).then(userData => {
        if (!userData) {
        res.status(400).json({ message: 'Email address not found' });
        return;
        }
        const validPassword = userData.checkPassword(req.body.password);
        console.log(validPassword);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!!' });
            return;
        }
        req.session.save(() => {
          req.session.userId = userData.id;
          req.session.username = userData.username;
          req.session.loggedIn = true;
          res.json({ user: userData, message: 'Log in sucessful!' });
    });  
});
});

// Log out an existing user
router.post('/logout', authorize, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

// Update an existing user
router.put('/:id', authorize, (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
      .then(userData => {
        if (!userData[0]) {
          res.status(404).json({ message: 'No user found with an id of ' + id });
          return;
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  })

// Delete an existing user
router.delete('/:id', authorize, (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with an id of ' + id });
          return;
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
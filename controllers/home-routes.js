// Requires express
const router = require('express').Router();
// Requires sequelize
const sequelize = require('../config/connection');
// Requires models
const { Post, User, Comment } = require('../models');

// Get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'postContent',
            'title',
            'created_at',
          ],
        order: [[ 'created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'commentText', 'postId', 'userId', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(postData => {
      const posts = postData.map(post => post.get({ plain: true }));
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get a specific post
router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'postContent',
        'title',
        'created_at',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'commentText', 'postId', 'userId', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
      ]
    })
      .then(postData => {
        if (!postData) {
          res.status(404).json({ message: 'No post found with id of ' + id });
          return;
        }
        const post = postData.get({ plain: true });
        res.render('single-post', {post});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Get log in page
router.get('/login', (req, res) => {
    res.render('login');
  });

// Get sign up page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
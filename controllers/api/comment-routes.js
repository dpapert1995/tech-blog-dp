// Dependencies
// Express.js connection
const router = require('express').Router();
// Comment model
const { Comment } = require('../../models');
// Authorization Helper
const authorize = require('../../utils/authorization');

// Routes

// Get comments
router.get('/', (req, res) => {
    Comment.findAll()
      .then(commentData => res.json(commentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Post a new comment
router.post('/', authorize, (req, res) => {
    Comment.create({
      commentText: req.body.commentText,
      postId: req.body.postId,
      userId: req.userId
    })
      .then(commentData => res.json(commentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
});

// Delete a comment
router.delete('/:id', authorize, (req, res) => {
    Comment.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(commentData => {
          if (!commentData) {
            res.status(404).json({ message: 'No comment found with an id of ' + id });
            return;
          }
          res.json(commentData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

module.exports = router;
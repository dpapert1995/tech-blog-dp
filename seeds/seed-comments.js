const { Comment } = require('../models');

const commentData = [
    {
        commentText: "What does this stand for, Cascading Style Sheets?",
        postId: 1,
        userId: 4
    },
  {
    commentText: "Nice! I am getting into web development. This is helpful!",
    postId: 3,
    userId: 1
  },
  {
    commentText: "Sequel? Like Star Wars sequels?",
    postId: 4,
    userId: 2
  },
  {
    commentText: "Luke, I am your father.",
    postId: 4,
    userId: 3
  },
  {
    commentText: "Does anyone know who Node is?",
    postId: 5,
    userId: 5
  },
  {
    commentText: "Nobody does. He is a mystery.",
    postId: 5,
    userId: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
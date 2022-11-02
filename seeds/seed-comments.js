const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "What does this stand for, Cascading Style Sheets?",
        postId: 1,
        userId: 4
    },
  {
    comment_text: "Nice! I am getting into web development. This is helpful!",
    postId: 3,
    userId: 1
  },
  {
    comment_text: "Sequel? Like Star Wars sequels?",
    postId: 4,
    userId: 2
  },
  {
    comment_text: "Luke, I am your father.",
    postId: 4,
    userId: 3
  },
  {
    comment_text: "Does anyone know who Node is?",
    postId: 5,
    userId: 5
  },
  {
    comment_text: "Nobody does. He is a mystery.",
    postId: 5,
    userId: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
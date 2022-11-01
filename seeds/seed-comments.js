const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "What does this stand for, Cascading Style Sheets?",
        post_id: 1,
        user_id: 4
    },
  {
    comment_text: "Nice! I am getting into web development. This is helpful!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Sequel? Like Star Wars sequels?",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Luke, I am your father.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Does anyone know who Node is?",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Nobody does. He is a mystery.",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
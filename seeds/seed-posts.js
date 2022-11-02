const { Post } = require('../models');

const postData = [
  {
    title: 'About HTML',
    post_text: 'HTML is the basic structure of a webpage.',
    userId: 1,
  },
  {
    title: 'About CSS',
    post_text: 'CSS is a styling format that allows developers to customize web features.',
    userId: 2,
  },
  {
    title: 'About Javascript',
    post_text: 'Javascript is a web development language used for making webpages dynamic.',
    userId: 2,
  },
  {
    title: 'About MySQL',
    post_text: 'MySQL is a language used to store tabulated data on servers.',
    userId: 3,
  },
  {
    title: 'About Node.js',
    post_text: 'Node.js hosts a number of packages that allow devs to create a comprehensive backend.',
    userId: 4,
  },
  {
    title: 'About Express.js',
    post_text: 'Express.js is an easy way to set up a server with JavaScript.',
    userId: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
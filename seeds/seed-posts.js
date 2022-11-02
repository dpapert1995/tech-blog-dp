const { Post } = require('../models');

const postData = [
  {
    title: 'About HTML',
    postContent: 'HTML is the basic structure of a webpage.',
    userId: 1,
  },
  {
    title: 'About CSS',
    postContent: 'CSS is a styling format that allows developers to customize web features.',
    userId: 2,
  },
  {
    title: 'About Javascript',
    postContent: 'Javascript is a web development language used for making webpages dynamic.',
    userId: 2,
  },
  {
    title: 'About MySQL',
    postContent: 'MySQL is a language used to store tabulated data on servers.',
    userId: 3,
  },
  {
    title: 'About Node.js',
    postContent: 'Node.js hosts a number of packages that allow devs to create a comprehensive backend.',
    userId: 4,
  },
  {
    title: 'About Express.js',
    postContent: 'Express.js is an easy way to set up a server with JavaScript.',
    userId: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
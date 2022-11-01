const { User } = require('../models');

const userData = [
  {
    username: "Daniel",
    email: "dpapert@gmail.com",
    password: "password1234"
  },
  {
    username: "Lizzy",
    email: "lizzy@gmail.com",
    password: "password1234"
  },
  {
    username: "Trysten",
    email: "trysten@gmail.com",
    password: "password1234"
  },
  {
    username: "Zach",
    email: "zach@gmail.com",
    password: "password1234"
  },
  {
    username: "Izzy",
    email: "izzy@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
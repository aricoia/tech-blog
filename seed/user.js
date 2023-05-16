const { User } = require('../models');

const userData = [
  {
    username: 'ArianaCoia',
    password: 'test1'
    
  },
  {
    username: 'aripascal',
    password: 'test2'
  },
  {
    username: 'pedrop',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
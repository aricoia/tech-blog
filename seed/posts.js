const { Post } = require('../models');

const postData = [
  {
    title: 'Check out my new webpage',
    content: 'Heres the link!',
    user_id: 1
    
  },
  {
    title: 'Need work',
    content: 'Anyone have any UI job leads??',
    user_id: 2
  },
  {
    title: 'CSS',
    content: 'CSS is the loml',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
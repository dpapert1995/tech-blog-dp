// An index file to gather the models and export them for use

// Requires all models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Model associations
// User has many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});
//Posts belong to user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// User has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
// Comment belongs to users
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// Post has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
})
// Comment belongs to a post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// Export the modules
module.exports = { User, Post, Comment };
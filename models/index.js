// An index file to gather the models and export them for use

// Requires all models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Model associations
// User has many posts
User.hasMany(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});
//Posts belong to user
Post.belongsTo(User, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// User has many comments
User.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});
// Comment belongs to users
Comment.belongsTo(User, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// Post has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
})
// Comment belongs to a post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

// Export the modules
module.exports = { User, Post, Comment };
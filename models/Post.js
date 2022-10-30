// Post model

// Requires sequelize
const { Model, DataTypes } = require('sequelize');
// Sequelize requires connection
const sequelize = require('../config/connection');

class Post extends Model {}
// Define columns and configuration
Post.init(
    {
        // id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // title
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // post_content
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                // post must be at least one character long
                len: [1]
            }
        },
        // user_id
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

// Export the model
module.exports = Post;
// Comment model

// Requires sequlize 
const { Model, DataTypes } = require('sequelize');
//Sequelize requires connection
const sequelize = require('../config/connection');

class Comment extends Model {}
// Define columns and configuration
Comment.init(
    {
        // id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // comment text
        commentText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // comment must be at least one character long
                len: [1]
            }
        },
        // user id
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // post id
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)

// Export the model
module.exports = Comment;
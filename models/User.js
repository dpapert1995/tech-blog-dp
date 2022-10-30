// User Model

// Requires sequelize
const { Model, DataTypes } = require('sequelize');
// Sequelize requires connection
const sequelize = require('../config/connection');
// Requires bcrypt for password hashing
const bcrypt = require('bcrypt');

// Set up user model
class User extends Model {
    // Method to check for password instance in db
    checkPassword(logPass) {
        return bcrypt.compareSync(logPass, this.password);
    }
}

// Define table columns and configuration
User.init(
  {
    // id
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // username
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
    },
    // email
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // Checks if email is valid
        validate: {
            isEmail: true
            }
    },
    // password
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // Password must be six (6) characters long
            len: [6]
            }
        }
  },
  {
    // Hooks for password hashing
    hooks: {
        async beforeCreate(userData) {
            userData.password = await bcrypt.hash(userData.password, 10);
            return userData;
          },
        async beforeUpdate(updatedData) {
            updatedData.password = await bcrypt.hash(updatedData.password, 10);
            return updatedData;
          }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
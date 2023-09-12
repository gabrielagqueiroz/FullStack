const sequelize = require('sequelize');
const dotenv = require('dotenv');

const connection = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = connection;
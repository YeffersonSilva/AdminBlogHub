const sequilize = require('sequelize');

const connection = new sequilize('guiapress', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;
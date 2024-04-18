const sequilize = require('sequelize');

const connection = new sequilize('guiapress', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
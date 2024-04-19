const sequilize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('categories', {

    title: {
        type: sequilize.STRING,
        allowNull: false
    },slug: {
        type: sequilize.STRING,
        allowNull: false        
    }
});



module.exports = Category;
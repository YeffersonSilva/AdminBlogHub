const sequilize = require('sequelize');
const connection = require('../database/database');

const Article = connection.define('articles', {

    title: {
        type: sequilize.STRING,
        allowNull: false
    },slug: {
        type: sequilize.STRING,
        allowNull: false        
    },
    body: {
        type: sequilize.TEXT,
        allowNull: false
    }
});

module.exports = Article;
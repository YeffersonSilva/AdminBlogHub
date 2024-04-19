const sequilize = require('sequelize');
const connection = require('../database/database');
const category = require('../categories/Category');

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

// relationships
category.hasMany(Article);
Article.belongsTo(category);



module.exports = Article;
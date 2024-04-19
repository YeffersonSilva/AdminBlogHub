const bodyParser = require('body-parser');
const express = require('express');
const app = express();  // create an express app
const path = require('path');  
const connection = require('./database/database'); // import the connection to the database


const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');
const Article = require('./articles/Article');
const Category = require('./categories/Category');


app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());


//data base
connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

 app.use('/', categoriesController);

app.use('/', articlesController);

app.get('/', (req, res) => {
res.render("index");
});
    
app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})
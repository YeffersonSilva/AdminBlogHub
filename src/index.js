const bodyParser = require('body-parser');
const express = require('express');
const app = express();  // create an express app
const path = require('path');  


app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());


app.get('/', (req, res) => {
res.render("index");
});
    
app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})
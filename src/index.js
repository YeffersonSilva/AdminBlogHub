const express = require('express');
const app = express();  // create an express app

app.get('/', (req, res) => {
    res.send('Hello World');
});
    
app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})
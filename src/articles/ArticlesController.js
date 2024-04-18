const express = require('express');

const router = express.Router();

router.get('/articles', (req, res) => {
    res.send('Categories route');
})

router.get('/admin/articles/new', (req, res) => {
    res.send('New category route');
})

module.exports = router;
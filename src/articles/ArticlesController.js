const express = require('express');

const router = express.Router();

router.get('/articles', (req, res) => {
    res.send('Categories route');
})

router.get('/admin/articles/new', (req, res) => {
    res.send('/admin/articles/new')
})

module.exports = router;
const express = require('express');

const router = express.Router();
const Category = require('./Category');
const Article = require('./Article');
const slugify = require('slugify'); 

router.get('/articles', (req, res) => {
    res.send('Categories route');
})

router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', {categories: categories});
    })
})

router.post('/articles/save', (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const category = req.body.category;
    if (title != undefined && body != null) {
        Article.create({
            title: title,
            slug: slugify(title),
            body: body,
            categoryId: categoryId
        }).then(() => {
            res.redirect('/articles');
        }).catch((error) => {
            console.error('Error creating article:', error);
            res.status(500).send('Internal server error');
        })

    } else {
        res.redirect('/admin/articles/new');
    }
}   )

module.exports = router;
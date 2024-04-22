const express = require('express');

const router = express.Router();
const Category = require('./Category');
const slugify = require('slugify');

router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new');
})


router.post('/categories/save', (req, res) => {
    var title = req.body.title;
    console.log("Received title:", title); // Verifica si el título se recibe correctamente

    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() => {
            res.redirect('/');
        }).catch(err => {
            console.error("Error al crear la categoría:", err);
            res.status(500).send("Error interno del servidor");
        });
        
    } else {
        res.redirect('/admin/categories/new');
    }
})

module.exports = router;
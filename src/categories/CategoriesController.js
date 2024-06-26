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
            res.redirect('/admin/categories');
        }).catch(err => {
            console.error("Error al crear la categoría:", err);
            res.status(500).send("Error interno del servidor");
        });
        
    } else {
        res.redirect('/admin/categories/new');
    }
})




router.get("/admin/categories", (req, res) => {
    
    Category.findAll().then(categories => {
    res.render('admin/categories/index', {categories: categories});
    
    });

})


router.post("/categories/delete", (req, res) => {
    const id = req.body.id;
    if (id != undefined && !isNaN(id)) {
        Category.destroy({
            where: {
                id: id
            } }).then(() => {
                res.redirect('/admin/categories');
            })
       
    } else {
        res.redirect('/admin/categories');
    }
})


router.get("/admin/categories/edit/:id", (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.redirect('/admin/categories');
    }

    Category.findByPk(id).then(category => {
        if (category != undefined) {
            res.render('admin/categories/edit', {category: category});
        } else {
            res.redirect('/admin/categories');
        }
    }).catch(err => {
        res.redirect('/admin/categories');
    });
})  


router.post("/categories/update", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    if (id != undefined) {
        Category.update({title: title, slug: slugify(title)}, {
            where: {
                id: id
            }
        }).then(() => {
            res.redirect('/admin/categories');
            console.log(`Categoría actualizada con éxito de Id: ${id}`);
        });
    } else {
        res.redirect('/admin/categories');
    }
})
module.exports = router;
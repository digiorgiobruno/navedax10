
const express = require('express');

const router = express.Router();

const controller = require('../controller/homeController');


// Muestra la home page principal (GET)
router.get('/', controller.show);



/*
REFACTORICE ESTE CODIGO, PARA QUE TRABAJEMOS ORDENADAMENTE
router.get('/', (req, res) => { 
           console.log('entre')
    const products = controller.leerTodos()
    res.render('home', { products });
});

*/

module.exports = router
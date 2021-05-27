let visitados = require('../data/datosProductos')

let userController = {

    create: (req, res) => {

        res.render('createProduct')
        console.log(visitados)
    },

    store: (req, res) => {
        console.log('entre al storess')
        console.log(req.body)
        let producto = {
            name: req.body.name,
            lastname: req.body.lastname,

        }
    
        visitados.push(producto)
        res.redirect('/') 
    },

    edit: (req, res) => {
        console.log('ESTOY ENTRANDO AL METODO EDIT:')

        let product = visitados.find(function (value) {

            return value.id === req.params.id
        })

        console.log(product)
        if (product) {
            res.render('editProduct', {
                product
            });
        } else {
            res.render('error404');
        }
    },

    update: (req, res) => {
        console.log('Entré al Update')
        console.log(req.body)
        let producto = {


            id: req.params.id,
            name: req.body.name,
            descuento: req.body.descuento,
            price: req.body.price,
            image: req.body.image

        }
        console.log(producto)
        console.log('---------------------------------------')
        console.log('me seleccionaron en update :' + req.params.id)

        visitados.forEach(function (i) {
            if (i.id === req.params.id) {
                i.name = producto.name
                i.price = producto.price
                i.descuento = producto.descuento
            }

        })
        console.log(visitados)

        res.redirect('/')
    },

    destroy: (req, res) => {
        console.log('entre destroy')
        console.log(req.params.id)

        let menorArray = visitados.filter(function (value) {

            return value.id !== req.params.id
        })
        console.log('-------ARRAY NUEVO MENOR')
        console.log(menorArray)
        visitados = [...menorArray]
        console.log('----------ARRAY VISITADOS')    
        console.log(visitados)   
        res.redirect('/')
    },


    cart: (req, res) => {
        res.render('products/cart');
    },

    search: (req, res) => {

        let dataABuscar = req.query
        res.sed(dataABuscar)
    }

}


module.exports = userController
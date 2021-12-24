const {Router} = require("express")
const mongoose = require("mongoose");
const router = Router()
const productSchema = require('../Schema/productSchema')


const Product = mongoose.model('Product', productSchema)

router.get('/products', (req, res) => {

    const {category, sort, order} = req.query
    Product.find({category: category}).sort(order + sort)
        .then(prod => {
            res.status(200).send(prod.map(item => {

                item.imageUrl = "http://" + req.headers.host + "/static/product/" + item.imageUrl

                return item
            }))
        })
        .catch(err => res.status(400).send(err))
})


module.exports = router
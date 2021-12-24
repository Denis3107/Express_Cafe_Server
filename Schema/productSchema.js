const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    imageUrl: String,
    name: String,
    price: Number,
    category: Number
})

module.exports = productSchema
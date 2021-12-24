const {Router} = require("express")
const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const router = Router()


const category = mongoose.model('category', new Schema({ items: [String]} ))

router.get('/category', (req, res) => {

    category.find()
        .then(category => res.status(200).send(...category))
        .catch(err => res.status(400).send(err))
})


module.exports = router
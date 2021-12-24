const express = require('express')
const productRoute = require('./routes/product')
const messageRoute = require('./routes/message')
const categoryRouter = require('./routes/category')
const galleryRouter = require('./routes/gallary')
const menuRouter = require('./routes/menu')
const mongoose = require('mongoose')
const path = require("path");
require('dotenv').config()


const PORT = process.env.PORT || 3001
const app = express()

app.use(require('cors')())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(productRoute)
app.use(messageRoute)
app.use(categoryRouter)
app.use(galleryRouter)
app.use(menuRouter)

app.use("/static", express.static(path.join(__dirname, 'static')));

 function start() {

    app.listen(PORT, () => {
        console.log("Server has been started in port: http://localhost:" + PORT)
    })

     mongoose.connect(process.env.MONGO_URL || "mongodb+srv://Express:310702@cluster0.ii1tl.mongodb.net/product?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("connect db"))
        .catch(err => console.log(err))


}

start()
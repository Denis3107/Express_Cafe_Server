const {Router} = require("express")
const fs = require("fs");

const router = Router()

const Folder = '/static/menu/';


router.get('/menu', (req, res) => {

    let img = fs.readdirSync("."+Folder).map(item => "http://" + req.headers.host + Folder + item)
    let arrays = [], size = 5;

    while (img.length > 0)
        arrays.push(img.splice(0, size));

    res.status(200).send(arrays)

})

module.exports = router
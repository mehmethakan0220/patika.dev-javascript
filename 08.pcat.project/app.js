const express = require('express');
const path = require('path');
const cors = require('cors');
const ejs = require('ejs');
const multiparty = require('multiparty');


const port = 3000;

const app = express();

const DB = require('./db/DbConnSettings');
const Photo = require('./models/Photo');

DB.ConnectToMongo();

app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
// app.use(express.json());

app.get("/", async (req, res) => {
    const photos = await Photo.getAllPhotos();
    res.render('index', {
        photos: photos
    })
})

app.get("/index", (req, res) => {
    res.redirect("/")
})

app.get("/abou", (req, res) => {
    // res.sendFile(path.resolve(__dirname,'temp/about.html'))
    res.render('about')
})

app.get("/add", (req, res) => {
    // res.sendFile(path.resolve(__dirname,'temp/contact.html'))
    res.render('add')
})

app.get("/videos", (req, res) => {
    // res.sendFile(path.resolve(__dirname,'temp/contact.html'))
    res.render('video')
})


app.post("/add", (req, res) => {

    //application/x-www-form-urlencoded
    // console.log(req.headers)
    const ct = req.headers['content-type'];
    // console.log(ct)
    if (ct === 'application/x-www-form-urlencoded') {
        Photo.addPhoto(req.body);
    } else if (ct.search("multipart/form-data") == 0) {

        var form = new multiparty.Form();
        form.parse(req, (err, fields, files) => {
            if (!err) {
                console.log("err=", err)
                console.log("fields=", fields)
                console.log("files=", files)

                // for (const item of files.file) {
                //     console.log(item.path)
                // }
            }
        })
    }

    res.redirect("/add")
})

app.get("/photos/:id", async (req, res) => {

    const photo = await Photo.getPhotoById(req.params.id);
    // console.log(photo)
    res.render('photoDetail', {photo})
})

app.listen(port, console.log(`Server Listening on Port:${port}`));
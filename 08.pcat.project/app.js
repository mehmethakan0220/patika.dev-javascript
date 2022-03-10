const fileUpload = require('express-fileupload');
const express = require('express');
const path = require('path');
const cors = require('cors');
const ejs = require('ejs');
const fs = require('fs');


// listening port
const port = 3000;
const app = express();

const DB = require('./db/DbConnSettings');
const Photo = require('./models/Photo');

// connect to db
DB.ConnectToMongo();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload({createParentPath:true}));


//routes
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

        if(!req.files){
            return res.status(404).send("No file were uploaded!")
        }

        let file = req.files.image;
        let uploadPath = __dirname + '/public/uploads/' + file.name;

        file.mv(uploadPath, async ()=>{
            await Photo.addPhoto({
                ...req.body,
                image: "/uploads/" + file.name
            })
        });

    res.redirect("/")
})


app.get("/photos/:id", async (req, res) => {
    const photo = await Photo.getPhotoById(req.params.id);
    res.render('photoDetail', {photo})
})

app.get("/edit/:id", async (req,res)=>{
    const photo = await Photo.getPhotoById(req.params.id);
    res.render('edit', {photo})
})

app.post("/edit/:id", async(req,res)=>{
    await Photo.updatePhoto(req.body,req.params.id);
    res.redirect("/photos/".concat(req.params.id))
})

app.get("/delete/:id", async(req,res)=>{
    await Photo.deleteById(req.params.id);
    res.redirect("/");
})

app.listen(port, console.log(`Server Listening on Port:${port}`));
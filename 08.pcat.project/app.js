const fileUpload = require('express-fileupload');
const express = require('express');
const path = require('path');
const cors = require('cors');
const ejs = require('ejs');
const fs = require('fs');
const  photoController = require('./controllers/photoController')
const viewController = require('./controllers/viewController')
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



/*template controllers */
app.get("/index", viewController.indexPage)
app.get("/abou", viewController.aboutPage)
app.get("/add", viewController.addPage)
app.get("/videos", viewController.videosPage)
app.get("/edit/:id", viewController.editPage)


//routes
app.get("/", photoController.getAllPhotos)
app.post("/add",photoController.createPhoto)
app.get("/photos/:id", photoController.getPhoto)
app.post("/edit/:id", photoController.updatePhoto)
app.get("/delete/:id", photoController.deletePhoto)
app.listen(port, console.log(`Server Listening on Port:${port}`));



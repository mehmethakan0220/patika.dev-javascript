const Photo = require('../models/Photo')
const path = require('path')
const fs = require('fs')

exports.getAllPhotos = async (req, res) => {
    const photos = await Photo.getAllPhotos();
    res.render('index', {
        photos: photos
    })
}

exports.createPhoto =   (req, res) => {

    if(!req.files){
        return res.status(404).send("No file were uploaded!")
    }

    let file = req.files.image;
    let uploadPath = __dirname + '/../public/uploads/' + file.name;

    file.mv(uploadPath, async ()=>{
        await Photo.addPhoto({
            ...req.body,
            image: "/uploads/" + file.name
        })
    });

res.redirect("/")
}

exports.getPhoto = async (req, res) => {
    const photo = await Photo.getPhotoById(req.params.id);
    res.render('photoDetail', {photo})
}

exports.updatePhoto = async (req,res)=>{
    async(req,res)=>{
        await Photo.updatePhoto(req.body,req.params.id);
        res.redirect("/photos/".concat(req.params.id))
    }
}

exports.deletePhoto = async(req,res)=>{
    const photo = await Photo.getPhotoById(req.params.id);
    const imagePath = __dirname + "../public" + photo.image;/**image: '/uploads/download (7).jpeg', */
    fs.unlinkSync(imagePath);
    await Photo.deleteById(req.params.id); 
    res.redirect("/");
}
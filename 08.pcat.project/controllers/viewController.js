const Photo = require('../models/Photo')

exports.editPage = async(req,res)=>{
    const photo = await Photo.getPhotoById(req.params.id);
    res.render('edit', {photo})
}


exports.videosPage = (req, res) => {
    // res.sendFile(path.resolve(__dirname,'temp/contact.html'))
    res.render('video')
}

exports.addPage = (req, res) => {
    // res.sendFile(path.resolve(__dirname,'temp/contact.html'))
    res.render('add')
}


exports.aboutPage = (req, res) => {
    // res.sendFile(path.resolve(__dirname,'temp/about.html'))
    res.render('about')
}


exports.indexPage = (req, res) => {
    res.redirect("/")
}
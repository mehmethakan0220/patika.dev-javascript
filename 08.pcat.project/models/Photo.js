const mongoose =  require('mongoose')

const PhotoSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    date:{
        type:Date,
        default:Date.now()
    }
})

const PhotoModel = mongoose.model('photo',PhotoSchema)


function addPhoto(object){
    PhotoModel.create(object);
}

async function getAllPhotos(){
    const result = await PhotoModel.find({});
    return result;
}

function updatePhoto(object){
    PhotoModel.updateOne()
}



module.exports = {
    addPhoto,
    getAllPhotos
}
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


async function addPhoto(object){
   return await PhotoModel.create(object);
}

async function getAllPhotos(){
    return await PhotoModel.find({}).sort("-date")
}

async function getPhotoById(id){
    return await PhotoModel.findOne({_id:id});
}

async function deleteById(id){
    return await PhotoModel.deleteOne({_id:id});
}

async function updatePhoto(object,id){
  const result = await PhotoModel.updateOne({_id:id},{title:object.title,description:object.description})
}



module.exports = {
    addPhoto,
    getAllPhotos,
    getPhotoById,
    updatePhoto,
    deleteById
}
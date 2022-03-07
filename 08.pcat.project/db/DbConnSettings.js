const mongoose = require('mongoose');

function ConnectToMongo(){
    mongoose.connect("mongodb://localhost/pcat")
}


module.exports = {
    ConnectToMongo
}


const mongoose = require('mongoose');

//Author Schema
const AuthorSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true,
        minlength:3,
        maxlength:40
    }
});
module.exports = new mongoose.model('Author',AuthorSchema);
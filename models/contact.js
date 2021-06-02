/*  Application programming interface On MongoDB Express NodeJS : By @thephotogenicbug (Naveen Kumar S) https://github.com/thephotogenicbug/ All Rights Reserved  : V1.0 :              */


const mongoose = require('mongoose');
const Author = require('./author');
const yup = require('yup');

// Book Schema
const BookSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
        minlength:3,
        maxlength:40
    },
    mobile:{
        type:String,
        required:true,
        minlength:5,
        maxlength:15
    },
    gender:{
        type:String,
        min:2,
        max:100,
    },
    dob:{
        type:String,
        required:true,
        minlength:5,
        maxlength:15
    },
   
    more:Author.schema,
    academic:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    activities:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    course:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    college:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    qualification:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    address:{
        type:String,
        required:true,
        minlength:5,
        maxlength:200
    },
    father:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    mother:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    occupation:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    caste:{
        type:String,
        required:true,
        minlength:1,
        maxlength:20
    },
    country:{
        type:String,
        required:true,
        minlength:1,
        maxlength:20
    },
    state:{
        type:String,
        required:true,
        minlength:1,
        maxlength:20
    },
    city:{
        type:String,
        required:true,
        minlength:1,
        maxlength:20
    },
    nationality:{
        type:String,
        required:true,
        minlength:1,
        maxlength:20
    },
});

const validateBook = book =>{
    const schema = yup.object().shape({
        name:yup.string().required().min(3).max(50),
        email:yup.string().required().min(3).max(40),
        mobile:yup.string().required().min(3).max(50),
        gender:yup.string().required().min(2).max(100),
        dob:yup.string().required().min(5).max(15),
        academic:yup.string().required().min(3).max(20)
    });
    return schema
    .validate(book)
    .then(book => book)
    .catch(error => {
        return{
            message:error.message
        }
    });
};
exports.Book = new mongoose.model("Book",BookSchema);
exports.validateBook = validateBook;
/*  Application programming interface On MongoDB Express NodeJS : By @thephotogenicbug (Naveen Kumar S) https://github.com/thephotogenicbug/ All Rights Reserved  : V1.0 :              */

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const booksRoute = require('./routes/contact');
const app = express();

const PORT = process.env.PORT || 5000

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/api/contact',booksRoute);


//connect to mongoose atlas
mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true}
    
    ).then(()=>{
    console.log("Connected to MangoDB Atlas")
}).catch(err =>{
    console.log("Something went wrong", error);
})

// Start Server
app.listen(PORT, ()=>{
    console.log("Server is running at port ", PORT);
});
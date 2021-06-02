/*  Application programming interface On MongoDB Express NodeJS : By @thephotogenicbug (Naveen Kumar S) https://github.com/thephotogenicbug/ All Rights Reserved  : V1.0 :              */

const express = require('express');
const router = express.Router();
const {Book, validateBook} = require('../models/contact');
// Post
router.post("/", async (req,res)=>{
  const error = await validateBook(req.body);
  if(error.message)res.status(400).send(error.message);
    book = new Book({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        dob:req.body.dob,
        gender:req.body.gender,
        more:{
            date:req.body.date,
        },
        academic:req.body.academic,
        activities:req.body.activities,
        course:req.body.course,
        father:req.body.father,
        mother:req.body.mother,
        occupation:req.body.occupation,
        caste:req.body.caste,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city,
        nationality:req.body.nationality,
        college:req.body.college,
        qualification:req.body.qualification,
        address:req.body.address,
        
    });
    book.save().then(book =>{
        res.send(book);
    }).catch(error =>{
        res.status(500).send("Book was not sent to DB");
    });
});

// Get  All 
router.get("/", (req,res)=>{
    Book.find()
    .then(book => res.send(book))
    .catch((error)=>{
        res.status(500).send("Something went wrong");
    });
});

// GET the Contact by id
router.get("/:bookId", async (req,res)=>{
   const book = await Book.findById(req.params.bookId)
   if(!book) res.status(400).send("Book Not Found")
   res.send(book);
    
});

// Update Contact Based on ID
router.put('/:bookid', async (req, res)=>{
    const updatedBook = await Book.findByIdAndUpdate(req.params.bookId,{
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        more:{
            date:req.body.date,
        },
        academic:req.body.academic,
        activities:req.body.activities,
        course:req.body.course,
        father:req.body.father,
        mother:req.body.mother,
        occupation:req.body.occupation,
        caste:req.body.caste,
        country:req.body.country,
        state:req.body.state,
        city:req.body.city,
        nationality:req.body.nationality,
        college:req.body.college,
        qualification:req.body.qualification,
        address:req.body.address,
    },
    {new:true}
    );

    if(!updatedBook) res.status(404).send("Book not Found");
    res.send(updatedBook);
});


// Delete Based on ID

router.delete('/:bookId', async (req,res)=>{
    const book = await Book.findByIdAndRemove(req.params.bookId);
    if(!book) res.status(404).send("Book with id not Found");
    res.send(book);
});

module.exports = router;
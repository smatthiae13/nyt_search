const express = require ("express");
const router = require ("router");
const Book = require ("./models/book");

router.get('./books', (req, res, next) => {
    Book.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});
router.post('./books', (req, res, next) => {
   if(req.body.action){
       Todo.create(req.body)
       .then(data => res.json(data))
       .catch(next)
   }else{
       res.json({
           error: "the input field is empty"
       })
   } 
});
// router.delete('./books/:id', (req, res, next) => {

// });
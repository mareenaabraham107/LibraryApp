const express = require('express');
const booksRouter = express.Router();
function router(navv){
     
var books = [
    {
        title : 'Alice in Wonderland',
        author: 'Lewis Carol',
        genre : 'Fantasy',
        img:"a.jpg"
    },
    {
        title : 'Harry Potter',
        author: 'J K Rowling',
        genre : 'Fiction, Magic',
        img:"b.jpg"
    }
];

booksRouter.get('/',function(req,res){
    res.render("books",
    {
        navv,
        title:'Library',
        books
    });
});

booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('book',
    {
        navv,
        title:'Library',
        book: books[id]
    });
});

 return booksRouter;
};

module.exports = router;
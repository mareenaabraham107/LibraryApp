const express =  require('express');
const app = new express();

const navss = [
    {link:'/signup',name:'SignUp'}
   
]
const navs = [
    
    {link:'/login',name:'Login'}
    
    
]
const nav = [
    {link:'/signup',name:'SignUp'},
    {link:'/login',name:'Login'}
]
const navv = [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/addbook',name:'Addbook'},
    {link:'/addauthor',name:'Addauthor'},
    {link:'/',name:'Logout'}
    
]


const booksRouter = require('./src/routes/bookRoutes')(navv)
const authorsRouter = require('./src/routes/authorRoutes')(navv)
const signupRouter = require('./src/routes/signupRoutes')(navs)
const loginRouter = require('./src/routes/loginRoutes')(navss)
const addBookRouter = require('./src/routes/addBookRoutes')(navv)
const addAuthorRouter = require('./src/routes/addAuthorRoutes')(navv)


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);

app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/addbook',addBookRouter);
app.use('/addauthor',addAuthorRouter);



app.get('/',function(req,res){
    res.render("index",
    {
         navss,
         title: 'Library'});
});


app.get('/signup', (req, res)=> {
    res.render('signup')
})


app.listen(5001);
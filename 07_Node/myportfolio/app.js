const express = require("express")
const app = express();

const logger = require("morgan")
app.use(logger("dev"))

app.use(express.static('public'))

app.get("/", (req, res) => {
     //res.send("i love pizza")
    res.render('/home.ejs')
});

app.get('/home', (req,res) => {
    res.render("home.ejs")
})

app.get("/about", (req, res)=>{
    res.render('about.ejs')   
});

app.get("/letschat", (req, res)=>{
    res.render('letschat.ejs') 
});

app.get("/java", (req, res)=>{
    res.render('java.ejs')
});

app.get("/blog", (req, res)=>{
    res.render('blog.ejs')
    
});

app.get('*', (req,res)=> {
    res.render ('error.ejs')
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log (`App is running on port ${port}`)
});


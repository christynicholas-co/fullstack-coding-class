const express = require("express")
const app = express();

const logger = require("morgan")
app.use(logger("dev"))

app.use(express.static('public'))

app.get("/", (req, res) => {
     //res.send("i love pizza")
     res.redirect('/home')
});

app.get("/about", (req, res) => {
     res.render('about.ejs')
     
});

app.get("/contact", (req, res) => {
     res.render('contact.ejs')
     
});


app.get('/home', (req,res) => {
     res.render("home.ejs")
})

app.get('*', (req,res)=> {
     res.render ('error.ejs')
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log (`App is running on port ${port}`));
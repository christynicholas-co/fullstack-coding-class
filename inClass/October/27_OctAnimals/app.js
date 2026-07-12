const express = require('express')
const app = express();

const logger = require ('morgan')
app.use(logger('dev'))

app.use(express.static("public"))

app.set("view engine", "ejs")

app.get ('/', (req,res) => {
     res.send("This is the home page")
})

//app.get ('/:animals', (req,res) => {
//     res.render("animals", {animals: req.params.animals})
//})

//app.get ('/demo', (req,res) => {
//     let animals = ['dog', 'cat', 'hippo']
//     res.render("demo", {data: animals})
//})

app.get ('/demo2', (req,res) => {
     let animals = [
          {
          breed: 'dog', 
          name: 'Spike'
          },
          {
          breed: 'cat', 
          name: 'Mr Tabby'
          },
          {
          breed: 'bird', 
          name: 'Tweety'
          }
     ]

     res.render('demo2', {data:animals})
})


app.get ('/:dog/:cat', (req,res) => {
     let {dog, cat} = req.params
     res.render('demo3', {dog, cat})
     })


app.get ("*", (req,res)=>{
     res.send("error !!!")
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`App is running on port ${port}`));
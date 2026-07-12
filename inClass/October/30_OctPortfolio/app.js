const express= require('express')
const app = express();

const logger = require ('morgan')
app.use (logger('dev'))

const {testData} = require('./fakeData')


app.use(express.static('public'))

app.get('/', (req,res) =>{
     res.render('home.ejs', {data: testData})
});
app.get('/home', (req,res)=>{
     res.render('home.ejs', {data: testData})
})

app.get('/about', (req,res)=>{
     res.render('about.ejs')
})

app.get('*', (req,res)=>{
     res.render('error')
})

const port = process.env.PORT || 3000;
app.listen (port, ()=>{
     console.log (`'App is running on port ${port}`)
})
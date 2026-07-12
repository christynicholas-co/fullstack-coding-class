const { request } = require('express');
const express = require('express')
const app = express();
const logger = require('morgan')
app.use (logger('dev'))

app.use (express.static('public'))

app.get('/', (req, res) => {
    res.render ("index.ejs")
})

app.get('/price', (req, res) =>{
    console.log (req)
    let route = ``
    let endpoint = `${baseUrl}/${route}`
    request(endpoint,(error, response, body)=>{
        let parsedData = JSON.parse(body)
        console.log(parsedData.results)
        res.render('price.ejs', {data:parsedData.results})
    })
   

    //app.get('/getMovies', (req,res)=>{
    //    console.log (req)
    //    let route = `search/movie?api_key=${key.tmdb_key}&query=${req.query.doggyHorse}&page=1&include_adult=false`
    //    let endpoint = `${baseURL}/${route}`
    //    request(endpoint,(error, response, body)=>{
    //        let parsedData = JSON.parse(body) 
    //        console.log(parsedData.results)
    //    res.render('results.ejs', {data: parsedData.results})
    //    })
    //})


})

app.get('*', (req,res)=>{
    res.render('error')
})

const PORT = process.env.PORT || 3000;
app.listen (PORT, ()=> console.log(`App is running on port ${PORT}`));
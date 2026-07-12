const express = require('express');
const app = express ();
const logger = require ('morgan')
app.use (logger('dev'))
const request = require('request')
const key = require('./config/keys')
app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.render('home.ejs')
})

//endpoint
const baseURL = "https://api.themoviedb.org/3"


app.get('/getMovies', (req,res)=>{
    //console.log (req)
    let route = `search/movie?api_key=${key.tmdb_key}&query=${req.query.doggyHorse}&page=1&include_adult=false`
    let endpoint = `${baseURL}/${route}`;
    request(endpoint,(error, response, body)=>{
        if (!error && response.statusCode == 200){
        let parsedData = JSON.parse(body) 
        console.log(parsedData.results)
    res.render('results.ejs', {data: parsedData.results});
    } else {
        res.status(404).send("Unable to process your request.");
    }
  });
});
//get/use our endpoint

app.get('*', (req,res)=>{
    res.render('Error')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`));


//base URL and ROUTE
//https://api.themoviedb.org/3/search/movie?api_key=10a84a9c37292e47e4928d78bd0052a2&query=Avengers&page=1&include_adult=false
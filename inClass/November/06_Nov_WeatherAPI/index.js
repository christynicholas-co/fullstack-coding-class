const express = require("express")
const app = express();
const $fetch = require ('node-fetch')

const logger = require("morgan")
app.use(logger("dev"))

app.use(express.static('public'))

app.get("/", (req, res) => {
     //res.send("i love pizza")
    res.redirect('/home')
});


app.get('/home', (req,res) => {
    res.render("home.ejs")
})

app.get("/results", (req,res) => {
    let route ="2487956/";
    let endpoint = `${baseURL}/${route}`;
    $fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.consolidated_weather[0]);
            res.render("results.ejs", {data: data.consolidated_weather[0]});  
})
.catch(error => console.log(error));
});

app.get("/london", (req,res) => {
    let route ="44418/";
    let endpoint = `${baseURL}/${route}`;
    $fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.consolidated_weather[0]);
            res.render("results.ejs", {data: data.consolidated_weather[0]});  
})
.catch(error => console.log(error));
});

//https://www.metaweather.com/api/location/2487956/

const baseURL = 'https://www.metaweather.com/api/location'

app.get('*', (req,res)=> {
    res.render ('error.ejs')
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log (`App is running on port ${port}`));
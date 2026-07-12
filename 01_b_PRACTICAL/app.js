const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/results', function(error, response, body) {
    if(!error && response.statusCode == 200) 
    // if there are no errors and returns status code 200 meaning successful
    var data = JSON.parse(body)
    //return the parsed data because its a string and we want an object.
    let characterNumber = Math.floor(Math.random()*data.length)
    //math floor returns integers higher than 0-1, math random allows random numbers from 0-1, multipy by the length of the object data we parsed returns random numbers the length of our object.
    let endpoint = 'https://swapi.dev/api/people'
    var name = data[characterNumber].text;
    var height = data[characterNumber].height;
    var haircolor = data[characterNumber].haircolor;

    res.render("results.ejs")
    //created variables for the name, height and haircolor to return those parts of the parsed data and return them with those names that were assigned to them in the parsed data and referenced in the results.ejs) so like the weather app when data is returned as name height and hair color it will be displayed in those categories made in the results ejs.

    fetch(endpoint + characterNumber)
        .then(data => {
            console.log('data is ', data)
            res.render('results.ejs', { results: data })
        })
        .catch(err => {
            console.log(err)
            res.render('error.ejs', { message: err })
        })
});

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log (`Star Wars backend running on port ${port}`));



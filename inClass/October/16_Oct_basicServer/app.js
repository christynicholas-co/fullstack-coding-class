//FOUNDATION
const express = require('express');
const app = express();

app.get('/', function (req, res) {
     res.send('i hate kale');
});

app.get('/animals', function(req, res){
     res.send("I love puppies.")
});

app.get('/food', function(req, res){
     res.send("I love pizza.")
});

app.get('/fruit', function(req, res){
     res.send("I love fruit.")
});

//app.listen(3000, function(){
//     console.log ("App is running on port 3000!")
//});

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`App is running on port ${port}`));


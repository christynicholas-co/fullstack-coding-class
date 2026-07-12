//FOUNDATION
const express = require('express');
const app = express();

app.get('/', function (req, res) {
     res.send('i love kale');
});

app.get('/about', function(req, res){
     res.send("This is the about page.")
});

app.get('/contact', function(req, res){
     res.send("You may contact us here.")
});

//app.listen(3000, function(){
//     console.log ("App is running on port 3000!")
//});

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`App is running on port ${port}`));


const express = require("express");
const app = express();

app.get('/', function (req, res) {
     res.send('i love pizza');
});

app.get('/:something', (req,res)=>{
     console.log(req.params.something)
     res.end()
})

app.get('bank/:fname/money/:number', (req, res) => { 
     //send back a string that says "hello fname. You have $number"
     let {fname, number} = req.params;
     let str = `Hello ${req.params.fname}. You have $${req.params.number}`
     res.send(str);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`App is running on port ${port}`));
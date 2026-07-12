const express = require ('express')
const app = express();

const logger = require('morgan') 
app.use (logger('dev'))

app.get ('/', (req, res)=>{
     res.send('root route')
});

//app.get('*',(req, res)=>{
//     res.send ('no page to send')
//});

//let req = {
//     params:{
//          something: "CAT"
//     }
//}

//req.params.something


app.get ('/:something', (req,res)=>{
     //console.log(res)
     //DO WHATEVER YOU WANT WITH ROUTE HANDLER
     
     res.send(`This is the ${req.params.something} page`)
})

const port = process.env.PORT || 3000;
app.listen (port,()=> console.log (`App is running on port ${port}`));


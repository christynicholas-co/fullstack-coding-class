const express = require('express')
const app = express ();
const logger = require ('morgan')
app.use (logger('dev'))
const request = require('request')
app.use(express.static('public'))

let image = `https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg`;

const baseUrl = "https://dog.ceo/api"
const route = "breeds/image/random"

app.get('/', (req,res)=>{
    res.render('index.ejs', {image})
})

app.get ('/getImage', (req,res)=>{
let endpoint= `${baseUrl}/${route}`
request(endpoint, (error,response, body)=>{
if (!error && response.statusCode == 200){
    let parsedData = JSON.parse(body)
 res.render('index.ejs', {image: parsedData.message})
} else {
      res.render('error.ejs', {error: "Something doggone funny happened"})
    }
  })
})

app.get('*', (req,res)=>{
    res.render('error.ejs')
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`App is running on port ${port}`));


// HTTP requests
// 1) know/use and endpoint - DONE
// 2) if there i no error, get data - DONE
//      2.a) if there IS an error - handle the error
// 3) parse the data - DONE
// 4) use the the parsed data - DONE





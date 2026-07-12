const express = require ('express')
const app = express()


//1. make connect
//  a. mongo url
//b. options
const mongoose = require('mongoose')
const keys = require ("./config/keys")

mongoose.connect(keys.mongoURI)
.then(() => console.log("Hey you are connected!!!"))
.catch(error => console.log("issues connecting:", error))

//2. build blueprints
//  a.schema
//  b. model
//3. write queries
let CharacterSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

let CharacterModel = mongoose.model
("character", CharacterSchema);

let Character = 
new CharacterModel({
    name: "Kramer",
    age: 34,
    email:"kramersemail@yahoo.com"
});

Character.save((err, character)=>{
    if (err){
        console.log("error", error)
    } else {
        console.log(character);
    }
})




const PORT = process.env.PORT || 3000;
app.listen (PORT, () => console.log(`App is listening on port ${PORT}`))
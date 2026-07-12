const express = require ('express')
const app = express()

const mongoose = require('mongoose')
const keys = require ("./config/keys")

mongoose.connect(keys.mongoURI)
.then(() => console.log("Hey you are connected!!!"))
.catch(error => console.log("issues connecting:", error))


let MarvelSchema = mongoose.Schema({
    alias: {
        type:String,
        required: [true,"You must have an alias"]
    },
    fname: String,
    lname: String,
    nemesis: String,
    hero: {
        type: Boolean,
        default: true
    },
    created: {
        type: DataView,
        default: Date.now()
    },
    alive: {
    type: Boolean,
    default: true,
    }
})



let CharacterModel = mongoose.model
("character", characterSchema);

let Character = 
new CharacterModel({
    alias: "Spider-man",
    fname: "Peter Parker",
    lname: "Parker",
    nemesis: "Green Goblin"
});

let Character = 
new CharacterModel({
    alias: "Green-Goblin",
    fname: "Norman",
    lname: "Osborne",
    nemesis: "Spider-man",
    hero: false,
    alive:false
});

let Character = 
new CharacterModel({    
    alias: "Titania",
    fname: "Mary",
    lname: "MacParran",
    nemesis: "She-Hulk",
    hero: false
});

Character.save((error, character)=>{
    if (err){
        console.log("error", error)
    } else {
        console.log(character);
    }
})
CharacterModel.find({}, 
(err, characters)=> {
if(err){
    console.log("error in your search:", err)}
    else{
        console.log(character)
    }
});



const PORT = process.env.PORT || 3000;
app.listen (PORT, () => console.log(`App is listening on port ${PORT}`))
const express = require ('express')
const app = express();
const mongoose = require ('mongoose')
const postRoutes = require("./routes/posts");

mongoose.connect('mongodb://localhost:27017/message_board', {useNewUrlParser:true, useUnifiedTopology:true})

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}))
app.use("/posts", postRoutes);

app.get("/", (req,res)=>{
    res.redirect("/posts");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
}); 
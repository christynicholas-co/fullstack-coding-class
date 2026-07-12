const express = ("express")
const app = express();

const logger = require("morgan")
app.use(logger("dev"))

app.get ('/', function(req, res){
     res.send("i love pizza")
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log (`App is running on port ${port}`));
const express = require ('express');
const app = express ();

const logger = require("morgan")
app.use(logger("dev"))

app.get('/', (req,res) => {
     res.send('I love puppies')
});

//app.get('/:num1/:num2', (req,res) => {
//let {num1, num2} = req.params
//res.send(`${num1 * num2}`)



const chalk = require('chalk');


const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(chalk.blue(`App is running on port ${port}`)));
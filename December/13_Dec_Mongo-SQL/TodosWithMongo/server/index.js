const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

// this is our built-in body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("../client"));


const {Client} = require('pg');
const keys = require("./config/keys");
const conn = new Client(keys)

conn.connect ()
.then(()=> console.log(`Connected to ${keys.database} database`))
.catch(err => console.log(`Error connecting to db`))




app.get("/", (req, res) => {
  res.send("Root route");
});

// Write queries



// Read - GET
app.get("/todos", (req, res) => {
  let 

 
});

// Create - POST
// let newId = 4; DELETE: not needed
app.post("/todos", (req, res) => { 
  let kittycat = `INSERT INTO todos
    (description, iscomplete, user_id)
    VALUES('${req.body.description}',false, ${userId})
    RETURNING *;`;

  //let newTodo = new TodoModel({
  //  description: req.body.description,
  //});
  //newTodo.save((err, result) => {
  //  if (err) res.status(400).json("There is an error posting to db");
  //  else res.status(200).json(result);
  //});
  conn.query(kittycat)
  .then(todo =>{
    console.log(todo.rows)
  })
  .catch(err=> {
    console.log(`Error posting data to database`, err)
    res.status(400).json('There is an error posting to db')
  })
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
  let requestedId = req.params.id;
  TodoModel.findByIdAndDelete(requestedId, (err, result) => {
    if (err) {
      console.log("Error deleting data from db", err);
      res.status(400).json("Error deleting data from db");
    } else {
      console.log("Result: ", result);
      res.status(200).json(result);
    }
  });
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let requestedId = req.params.id;
  TodoModel.findById(requestedId, (error, result) => {
    if (error) {
      console.log("Error finding and updating to db", error);
      res.status(400).json("Error updating to db");
    } else {
      result.isComplete = !result.isComplete;
      result.save((err, updatedTodo) => {
        if (err) {
          console.log("Error updating document", err);
          res.status(400).json("Error updating document");
        } else {
          res.status(200).json(updatedTodo);
        }
      });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

const express = require ('express')
const app = express();

const logger = require ('morgan')
app.use(logger('dev'))

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const {todoArray} = require ('./fakeData')

app.use(express.static("../client"));

app.get('/', (req, res)=>{
    res.send ("Root route")
})

app.get ('/todos', (req, res)=>{
    res.status(200).json (todoArray)
});

let newId = 4;
app.post('/todos', (req, res)=>{ 
    let newTodo = {
        id: newId++,
        description: req.body.description,
        isComplete: false
    };
    todoArray.push(newTodo)
    res.status(200).json(newTodo)
});

app.delete('/todos/:id', (req, res) => {
    let requestedId = parseInt(req.params.id);
    let requestedTodoIndex = todoArray.findIndex((todo)=> {
    return requestedId === todo.id
})
todoArray.splice(requestedTodoIndex, 1)
res.status(200).json(todoArray)
})

app.put("/todos/:id", (req, res) => {
    let requestedId = parseInt(req.params.id);
    let requestedTodo = todoArray.find((todo) => {
      return todo.id === requestedId;
    });
    if (requestedTodo) {
      requestedTodo.isComplete = !requestedTodo.isComplete;
      res.status(200).json(requestedTodo);
    } else {
      res.status(404).json({ message: "Id does not exist in database" });
    }
  });


const PORT = process.env.PORT || 3000;
app.listen (PORT, ()=> console.log(`App is running on port ${PORT}`))


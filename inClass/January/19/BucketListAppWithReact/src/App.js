import { useState } from 'react'
import './App.css';

// generates the li element and all its attributes
const TodoItem = ({text, toggleComplete}) => (    // destructuring
  <li onClick={toggleComplete}>
    {text}
  </li>
)

// Holder of the render (look for return statement) and the state (todos, newTodo)
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Hike Patagonia",
      isComplete: false
    }, 
    {
      id: 2,
      description: "View Earth from Space",
      isComplete: false
    }
  ])
  const [newTodo, setNewTodo] = useState('')

  // provides 2 way binding between the input element and the state:newTodo
  const handleChange = event => {
    setNewTodo(event.target.value)
  }

  // transfers the newTodo to the todos Array (system of record within the React app)
  const handleSubmit = event => {
    event.preventDefault()
    const newTodos = [...todos, { id: Date.now(), description: newTodo, isComplete: false}]
    setTodos(newTodos)
    setNewTodo('')
  }
  
  // mark a todo with strike through capability
  const handleClick = id => {
    console.log('handleClick fired with id: ', id)
    // update the state with the appropriate todo item's completion property flipped
    // update the state
        setTodos(prevTodos => {
          console.log('previous copy of todos', prevTodos)    

          // find the relevant todo object using the id
          let clickedTodo = prevTodos.find(t => t.id == id);
          // change it's isComplete
          clickedTodo.isComplete = !clickedTodo.isComplete;
          console.log('later copy of todos', prevTodos)    

          return prevTodos;
        })
  }

  // generates a list of TodoItem's
  const todoList = todos.map(todoObj => (
    <TodoItem 
      key={todoObj.id} 
      text={todoObj.description} 
      toggleComplete={() => {
        handleClick(todoObj.id)
      }} 
    />
  ));

  // sends the JSX generated for rendering
  return (
    <div className="App">
      <h1>My Bucket List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          className="todo-input"
          autoComplete="off"
          type="text"
          name="newTodo"
          placeholder="My next bucket list item"
          onChange={handleChange}
          value={newTodo}
        />
        <button type="submit" className="save-button">SAVE</button>
      </form>
      <div className="todo-content">
        <ol>
          { todoList }
        </ol>
      </div>
    </div>
  );
}

export default App;
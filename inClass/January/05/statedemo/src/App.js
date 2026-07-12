import {useState} from 'react'
import './App.css';
const TodoItem = ({text}) => (
  <li>{text}</li>
)


function App() {
const [favColor, setFavColor]= useState('Purple')

setTimeout(() => {
  setFavColor('Green')
}, 5000)

return (
    <div className="App">
      My favorite color is {favColor}  
      

    </div>
  );
}

export default App;

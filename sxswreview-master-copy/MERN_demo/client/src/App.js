import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const initialState = {
    fname: "",
  };

  const [formData, setFormData] = useState(initialState);

  const resetFields = () => {
    setFormData(initialState); // sets ALL the fields in formData to empty strings
  };

  const handleClick = () => {
    console.log("I am the handleClick");
    axios
      .get("/test")
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .finally(() => console.log("http request complete!!!"));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData, // spread operator in order to maintain previous data
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/new", formData)
      .then((response) => console.log("Response data: ", response.data))
      .catch((err) => console.log("Error: ", err));
    resetFields();
  };

  return (
    <div>
      <h1>Mern Demo</h1>
      <button onClick={handleClick}>Click Me</button>
      
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="fname"
            id="fname"
            value={formData.fname}
            onChange={handleChange}
          />
        </label>

        <button type="submit">SUBMIT</button>
        <button type="reset" onClick={resetFields}>
          RESET
        </button>
      </form>
    </div>
  );
}

export default App;

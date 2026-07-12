import React from 'react';


//create a login form using bootstrap..i added bootsrap to html file but you can install as well and import here in app.js at the top as a node module
//rules require class to be change to className and all tags have to have closing here the input tag.
//change the text for buttons to fit our needs
//create a component for state to toggle showpassword button on and off. 
//create a component folder with file




const App = () => {
  return (
    <div className="container my-5" >
    <form>
      {/* email address input with label and user friendly note underneath */}
    <div className="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>

    {/* password input*/}
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>

    {/* toggle button for show password */}
    <div className="mb-3 form-check">
      <input type="text" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">view password</label>
    </div>

    {/* submit button for email and pw login info */} 
    <button type="submit" className="btn btn-primary">Submit</button>
  </form> 
  </div>
  )}

export default App;

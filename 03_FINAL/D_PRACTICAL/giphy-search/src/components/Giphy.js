import React, {useEffect, useState }from "react";
import axios from "axios";

import Loader from "./Loader"

const Giphy = () => {
const [data, setData] = useState([])
const [isloading, setIsLoading] =useState (false)
//set up a controlled input for search results
const [search, setSearch]= useState ("")

//we need to handle the errors
//this state can change but isError is a boolean we want to start our app off wih no errors so set to false
const [isError, setIsError] = useState (false)

//isloading is a boolean and loading the data is false because its not actually loading anything.
//when we go into fetch data we are trying to change the state to true so isloading would change in fetch

//for an asynchronous function we have to use await because its promise based.
    useEffect(()=>{
        //call the fetch data
        const fetchData = async () => {
//in case the error somehow switches to true before we make our API call we will set it to false 
            setIsError(false)
            setIsLoading(true)
            //wrap our API call in a try/catch statement

            //render the spinning loader
           try {
            //   try running some commands and exit unless theres an error then we can catch it
            const results = await axios("https://api.giphy.com/v1/gifs/search", { 
                params: {
                    api_key: "fHy50NNCOqRf3OcsKSTmKUWcDTtd0pCV",
                    q: "string",
                    limit: (25),    
                    //the default is already 25 for the search results for this api 
                    //can increase the limit of gifs if you wanted the page to render slower to view the component loader, because its pretty fast
                    bundle: "string",
                    rating: "pg"
                }
              
            });
            console.log (results)
            //save the data
            setData(results.data.data)
            //let the app know we are no longer loading so we can change the status of the loader component to stop spinning because we have finished the API call
            //state changes it rerenders the data

           } catch (err) {
            //   if theres an error state will change to true
            setIsError(true);
            //check what the errors are with consolelog
            //console.log(err) to see whats wrong
            //test by mistype the url to see if it works, results will consolelog:Network error
            //also components under giphy the state is set to true
            //to make the UI do something different bootstrap has an alert in documentation we can make red with "danger" in the return statement
            //set a timer so alert disappears after four seconds, it will trigger the app to rerender and when it does the alert will go away because the error wont run later on in the return so the state wont change.
            setTimeout(()=> setIsError(false), 4000)

           }
          
              
                setIsLoading(false);
                //if statement will not run and it will just render the data with the return 
        }

        fetchData();
//pass in an empty array so we dont get a loop
    }, []);
    //define rendergifs function
    const renderGifs = () => {
        //inserting logic for fetch to work 
        //if its true return div that says loading
        if (isloading) {
            return <Loader/>;

        }
        //if its false render 
        return data.map(el => {
            return(
                //key returns the id for each gif tag in the data results
                //return the specific data for the img from the data returned in the console log from the api
                <div key={el.id} className = "gif">
                    
                    <img src={el.images.fixed_height.url}/>
                </div>
            )
        })

    } 
    //define the function error
    const renderError = ()=> {
        //if statement to check if error is set to true
        if(isError){
            //return bootstrap error
            return (
              <div className= " .alert alert-danger-dismissible fade show" role= "alert">Unable to get Gifs , Please try again in a few minutes    <button className= "close"></button>
              </div>             
               )
        }
    }

    //create the handle search controller in the onchange event
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    //create handleSubmit for onclick of submit button
    //prevent page from reloading using preventdefault when we press search button
    //new state  with submit, so we want the page to respond the same way with changing state for search so we set error and loading to the same as previous state.
    //after we make the api call we need to save the data
    const handleSubmit = async event =>{
        event.preventDefault();
        setIsError(false);
        setIsLoading(true);

        //run the same code try/catch otherwise the code will be stuck in loading component because it errors out it wont behave the same 

        try {
            //api call to giphy API with specific search query 
            const results = await axios ("https://api.giphy.com/v1/gifs/search", { 
                params: {
                    api_key: "fHy50NNCOqRf3OcsKSTmKUWcDTtd0pCV",
                    q: search,
                    limit: (25),    
                    //the default is already 25 for the search results for this api 
                    //can increase the limit of gifs if you wanted the page to render slower to view the component loader, because its pretty fast
                    bundle: "string",
                    rating: "pg"
                }
                
            });

            //returns the second tier of info with data.data because of how the api returns the data. 
            setData(results.data.data);

        } catch (err) {
            setIsError(true);
            setTimeout(()=> setIsError(false), 4000);

        }
        
            //change state of setisloading to false to avoid the render of component loading unneeded
            setIsLoading(false);
    }

    return (
        //render alert if there is an error
        //give the user a form to search and a submit button with bootstrap
        //add a control for form and an event handler so when we check the console in dev tools on the browser after we start typing in the search we can see the state changes
        //set up button to handle the logic for clicking submit with onclick 

        <div className = "m-2">
            {renderError()}
           <form className = "form-inline justify-content-center m-5">
               <input value={search} onChange={handleSearchChange} type="text" placeholder= "search" className= "form-control"/>
               <button onClick={handleSubmit} type="submit" className= "btn btn-primary mx-2">Search</button> 

           </form>
    <div className ="container gifs"> {renderGifs()}</div>
    </div>
        )
}

//make an API call to pull up data. 

export default Giphy

//pagination handles all the data not overloading one page. so the return of a specified number of items returning in one page and creating another page for the other results. or loading



//if you want to leave it up to the user how many items they can return you would have to creat eanother component with state so that the app reloads and returns the data the user requested.
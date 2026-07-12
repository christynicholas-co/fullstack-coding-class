

const baseUrl = "http://localhost:3000"


//how to read our data
$(document).ready(function(){
    let route = "todos"
    let endpoint = `${baseUrl}/${route}`
    fetch(endpoint)
    .then(function(response){
        if (!response.ok) throw Error("Christy broke it!!!");
        else return response.json();
      })
      .then(function (dataArray) {
        $("ul").empty();
        dataArray.forEach(function (todo) {
          $("ul").append(
            `<li>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
          );
        });
      })
      .catch(function (error) {
        console.error("Issues READING from the database: ", error);
      });
  });
  
//  CREATE data
$("input").keypress(function (event) {
    if (event.which === 13 && $(this).val() !== "") {
      let newTodoItems = {
        description: $(this).val(),
      };
      let endpoint = `${baseUrl}/todos`;
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodoItems),
      })
        .then(function (response) {
          if (!response.ok) throw Error("No response creating data");
          else return response.json();
        })
        .then(function (newTodo) {
          $("ul").append(
            `<li>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
          );
          $("input").val("");
        })
        .catch(function (err) {
          console.error("Error creating data to server: ", err);
        });
    }
  });  

  

//update todo
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})



//delete todo
$("ul").on("click", "span", function(){
    $(this).parent().remove()
})





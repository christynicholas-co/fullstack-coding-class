## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```
--the code sorts the array in ascending order from roo-raa

var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return raa-roo});
    
--this code returns array in descending order (raa-roo) essentially(b-a)

## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

the const pi cannot be run before initialization. the const pi needs to be moved above the utilization of pi. Its like running pi before you've defined it. 

var doesnt make a difference its just a differnt way to declare the variable that has to do with scope. The error does not involve scope.

it should look like this:

(function myFn(radius){
  const pi = 3.1415926;
    var boundary = Math.pow(radius, 2) * pi
    
    if(boundary) console.log('boundary is ', boundary);
}(20)) 

    http://jsbin.com/zugaginigu/edit?js,console


Score - 100%
Great job!!!
    
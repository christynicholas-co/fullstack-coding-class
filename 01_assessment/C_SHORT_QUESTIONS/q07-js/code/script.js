//// get reference to the first input element
//var firstNum = document.getElementById("first")

//// get reference to the second input element
//var secondNum = document.getElementById("second")

//// get reference to the submit input element which
//// looks like a button
//var btn = document.querySelector("input[type='submit']")

//// get reference to the area where you will place the
//// answer to the calculation
//var msg = document.querySelector("#message")


// attach a handler function to the button which
// calculates the result of multiplication and 
// displays the result
//btn.onclick = function(){
//   let answer = myCalc(firstNum, secondNum)
//   //msg.innerText = `The answer is ${answer || ""}` im guessing the || "" it returns NaN not a number im not sure how to fix it. 
//   return answer.msg = `The answer is ${answer || ""}`
//this returns a string which is not the goal || means and/or so the answer is NaN meaning its not possible because you cant return a string from adding two numbers. 
   
//}


//all the extra definitions and renaming of variables above was confusing especially considering we are inputting number1 and number 2 and the input box is called first number and second number, it made coding here very confusing! i understand it was supposed to make creating code a shortcut but the const and var mycalc all of it just seemed confusing and a long way around to get the same results. 
//i did it the "long way" by adding the document.getElementById plus value to the original ids..i didnt see a reason to rename them although i do understand it...it made it more confusing and cumbersome for me

//i created a function called multiplyby that lets me know what im going to do (multiplication)
function multiplyBy()
{
      num1 = document.getElementById("first").value;
      num2 = document.getElementById("second").value;
      document.getElementById("message").innerHTML = num1 * num2;
}

// perform the calculation ... here it multiplies the
// two inputs into the function.  Having a separate function
// allows the developer to change the calculation without
// requiring to change other code.
//var myCalc = function(a, b) {
//   console.log(a*b);
//} 
//console.log (8*3)
Take a look at this code snippet

https://jsbin.com/yohivodobe/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ?

    -->span is an inline element (horizontal) you would have to set the span display to inline-block.

1. Why can I not set the margin-top on the img with the id "pic" in the head section?  

    -->because margin-top is being declared twice and html runs in order and the last code to run is kept. 
 
 
 ***the following would work:

 <!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
} 
/*<!-- you can either keep this id here and manipulate the margin-top here or add margin-top attribute below like in the example but you cant do both and expect the id attribute to work because it runs first in the header section.-->*/
.pic {margin-top:50px;}
</style>
</head>
<body>

<h2>The id Attribute</h2>
<p>Use CSS to style an element with the id "myHeader":</p>
<img class="pic" width="500" 
        src="https://i.imgur.com/pKqwIjE.jpeg">
<h1 id="myHeader">My Header</h1>

</body>
</html>

Score - 75%

Your answer for #2 is not quite accurate. This has to do with specificity.
The inline styling is overriding the internal styling.
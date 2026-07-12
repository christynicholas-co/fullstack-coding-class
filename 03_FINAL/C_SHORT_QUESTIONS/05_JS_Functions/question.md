Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

See example below ...

```
    This is a string
    There was string
      ^^^^^^^          <-- 7 differences
```

In the above example, the function should return 7.

Please do not look for solved problems on the web. They are too complicated and you are likely to get into rabbit holes. Think about a string as an array of characters. How would you iterate over them and compare?  What edge conditions should you check for?

Give it a try.

 let one = "This is a string"
let two = "There was a string"
 
 const newOne = one.split("")
  const newTwo = two.split("")
 
 let diff = diff => {
 (newOne.diff-newTwo.diff)
 return diff

 }


console.log(diff)

Score - 20% - for attempting

Your code actually returns the definition of diff and not the result you might be expecting
Also, your code is only based on number of spaces NOT the position of characters themselves.


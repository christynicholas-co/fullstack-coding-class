// *** Please include your answer below ***


let sentence = "my name is christy nicholas"
//if it was capital letters i would need to convert to all lowercase using toLowercase()

//and then change to array using split to separate the string leaving out the spaces in between.

let word = sentence.split(" ")
const array = word.sort ((a,b) => b.length - a.length);
console.log (word.length - 1)
//returns how many in array
console.log (word [0])
//console logs the last item in array.


//console.log (array)

//created a sentence
// needed to turn string into an array and sort the array to determine which word has the most characters and display the results whichever one is the longest.
//had a hardtime doing it from memory without rummaging through notes. :/
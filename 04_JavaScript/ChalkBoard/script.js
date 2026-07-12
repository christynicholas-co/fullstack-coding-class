//-----2-----
let colors = function(color){
    console.log("My favorite color is " + color)
}

colors ("green");
colors ("orange");
colors ("purple");
colors ("blue");
colors("pink");

//------2---extra console logs favorite color in a specific color----
function colorType(name, color){
    console.log("%cMy favorite color is " + name + "!", "color:" + color + ";font-weight:bold;");
    }
    
    colorType ("green", "#00ff00");
    colorType ("blue", "#0000ff");
    colorType("red", "#ff0000");
    colorType("purple", "purple");
    colorType("orange", "orange");


//------3-----
function animal(name) {
    console.log("I like " + name);
}
// animal("frogs");
// animal("whales");
// animal("puppies");
// animal("birds");
// animal("bunnies");


//----4------
function cities (name) {
    console.log ("I'd like to visit " + name + " one day!")
}

//cities("Paris")

//----5----
function favBook (quote){
    var quote = ("As happens sometimes, a moment settled and hovered and remained for much more than a moment. And sound stopped and movement stopped for much, much more than a moment.");
    console.log (quote);
}

favBook("quote");
//1.
favQuote = favBook;
favQuote("quote");
//2. favorite = favQuote
//favorite("quote")
//3. book = favorite
//book("quote")
//4. author = book
//author("quote")
//5. cool = author
//cool("quote")


//---6----
function money (name, num){
    console.log ("Hi " + name + " can I borrow $" + `${num}` + " from you?");
}
money ("James", 10);
money ("Jean", 100);
money ("Jared", 1.00); //results $1
money ("Johnny", 1,500); //results $1 
money ("Jenny", 10.50); //results $10.5 
//doesn't recognize the period or comma or the numbers after them


//----BONUS------
//2. 
colors= color => "My favorite color is " + color
//colors("green") //returns "My favorite color is green"

//3.
let animal = name => "I like " + name
//animal("bunnies") //returns "I like bunnies"

//4. 
let cities = name => "I'd like to visit " + name + " one day!"
//cities("Paris") //returns "I'd love to visit Paris one day!"

//5.
let favBook = quote => "As happens sometimes, a moment settled and hovered and remained for much more than a moment. And sound stopped and movement stopped for much, much more than a moment."
//favBook("quote")//returns "As happens sometimes...."
//favBook = favQuote ...etc

//6.
money = (name, num) => "Hi " + name + " can I borrow $" + `${num}` + " from you?"
//money("James", 10) //returns "Hi James can I borrow $10 from you?"


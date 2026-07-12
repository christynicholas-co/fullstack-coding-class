//console.log ("hello world")

//const contact = function(){
//     return{ 
//     fname: "George",
//     lname: "of the Jungle",
//     street1: 228 Runamuck P1,
//     street2: apt 2508,
//     city: Orlando,
//     state: FL,
//     zip:21224,
//};
//};
//};

//


let character = function (){
     return{
          fname:"George",
          lname:"of the Jungle",
          fullname:function () {
               return `${this.fname} ${this.lname}`;
          }
     }
}

let person = character();

//console.log(person)
//console.log(person.fname)
//console.log(person.lname)
console.log(person.fullname());

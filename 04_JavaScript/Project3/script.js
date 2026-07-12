//function numadd (a,b,c,res){
//    a = parseInt(prompt("Give a number"));
//    b = parseInt(prompt("Give another number"));
//    c =  parseInt(prompt("Give a number again"));
//    res = (a + b + c );
//    alert("By the way the sum of your numbers is " + res);
//    }  
//numadd();


const a = parseInt(prompt("Give a number"));
const b = parseInt(prompt("Give another number"));
const c =  parseInt(prompt("Give a number again"));
const array = [a, b, c,];

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
document.getElementById('para').innerHTML = "By the way the sum of your numbers is " + sum;

document.getElementById("general").style.fontSize="96px";
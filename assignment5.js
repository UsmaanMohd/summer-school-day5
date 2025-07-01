console.log("ASSIGNMENT NUMBER 5:")
console.log("variables and data types:")

let name="usmaan";
const age = 23;
var isMan = true;
let address 
let marks = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isMan);
console.log(typeof address);
console.log(typeof marks);

//hoisting
console.log("Hosting demo:")

console.log(a); // hoisted with var(in this value goes to top , not initialized(undefined))
var a = 10;     //only var are hoisted

// console.log(b); //  not hoisted with let and const because it gives an reference error
// let b = 20;


//conditional statements:
console.log("Conditional statements:")

let myname = prompt("what is your name?")
let myAge = prompt("Enter your age:");

if(myAge<18){
    console.log(`Hey ${myname}, you are a teen!`)
}
else if(18<age<60){
    console.log(`Welcome ${myname}, you are an adult!`)
}
else{
    alert(`Hello ${myname}, you are a senior citizen!`)
}


//for loop to print numbers from 1 to 10
for(let i=0;i<11;i++){
    console.log("number is:",i)
}


//while loop to print even numbers from 2 to 20
let i=2;
while(i<=20){
    console.log(i)
    i+=2
}

//do while loop
let k=10;
do{
    console.log(k);
    k--
}
  while(k>=1)


    //functions
    function myfunction(a,b){
        console.log(a+b)
        return a+b
    }
    myfunction(2,3)

//square of a number:
    function square(num){
        console.log(num*num)  
           return num*num;
    }
   square(3)


   //arrow function
const greet = (name) => {
 

    return `hlo, ${name}!`;
};
  console.log(greet("usmaan")); 



  //callback function
  function calculate(a, b, callback) {
  return callback(a, b);
}
function multiply(x, y) {
  return x * y;
}

let results = calculate(4, 5, multiply);

   console.log("result:", results); 





//bonus project

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

let operation = prompt("Choose an operation: + - * /");

let result;

if (operation === "+") {
  result = num1 + num2;
  alert("Result: " + num1 + " + " + num2 + " = " + result);

} 
else if (operation === "-") {
  result = num1 - num2;
alert("Result: " + num1 + " - " + num2 + " = " + result);

} 
else if (operation === "*") {
  result = num1 * num2;
  alert("Result: " + num1 + " * " + num2 + " = " + result);

} 
else if (operation === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  alert("Result: " + num1 + " / " + num2 + " = " + result);

  }
   else {
    alert("Division by zero is not allowed.");
  }
} 
else {
  alert("Invalid operation selected.");
}
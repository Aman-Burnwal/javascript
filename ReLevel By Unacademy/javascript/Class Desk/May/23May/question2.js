// Problem 2 –
// Create a program to print the result as pass if the marks obtained is greater than or equal to 40 using ternary operator.

const prompt = require('prompt-sync')();

// let a = prompt("enter your marks here");
// marks >= 40 ? console.log("pass") : console.log("fail");
const marks = prompt("Enter your marks here  ");


let result = marks >= 40 ? 'pass' : 'fail';

console.log(`your result is ${result}`);





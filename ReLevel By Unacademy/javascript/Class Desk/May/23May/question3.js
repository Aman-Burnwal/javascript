// Create a program to find if the number is positive, negative or zero.
// Using switch case

const prompt = require('prompt-sync')();
let num1 = parseInt(prompt());

switch (true){
    case (num1 === 0):
        console.log('Zero')
        break;
    case (num1 > 0):
        console.log("positive")
        break;
    case (num1 < 0):
        console.log("Negative")
        break;
    
    default:
        console.log("Not a Number")

    
}
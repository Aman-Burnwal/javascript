// // write a program that finds prints it's factor


// //Default program
const prompt = require('prompt-sync')({sigint: true});
let number = parseInt(prompt("Enter your number to get factors of it   =>   " ));


// // 1. Using Iterations

// /*let i = 1
// while(i <= number){
//     if(number % i === 0){
//         console.log(i)
//     }
//     i++;
// }  
// */




// // Using Recursion

let num = 1;
factor(number, num);

function factor(number , num){
    if(number === 1 || number === num){
        return console.log(number);
    }
    if(number % num === 0){
        console.log(num);
    }
    num += 1;
    return factor(number, num);
}
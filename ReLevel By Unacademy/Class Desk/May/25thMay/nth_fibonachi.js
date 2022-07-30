// 8. Nth Fibonacci (15 min)

// Problem Statement:
// Given the value of n, find out the nth term of the fibonacci series.
// Fibonacci series is like 0,1,1,2,3,5,8,13… where the next element is always the sum of the previous two
// elements and the first two elements are 0 and 1.

// Example-1:

// Input 5
// Output 3

// Example-2:

// Input 24
// Output 28657

let prompt = require('prompt-sync')()
let number = parseInt(prompt("Enter number here"));


function vauleOfNthFibonachi(num){
    let previousNum = 1;
    let lastNum = 0;
    let current = 0;
    if(num === 1){
        return 0;
    }
    if(num === 2){
        return 1;
    }

    for(let i = 3; i <= num; i++ ) {
        current = previousNum + lastNum;
        lastNum = previousNum;
        previousNum = current;

    }

    return current;
}

// vauleOfNthFibonachi(24);

console.log("the value of nth fibonachi is", vauleOfNthFibonachi(number), " so")
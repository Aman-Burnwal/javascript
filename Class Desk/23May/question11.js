// Create Fibonacci series of 5 and 8.

// Hint : The Fibonacci sequence is a series of numbers in which each number is the sum of the two that
// precede it. Starting at 0 and 1, the sequence looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on
// forever.    

function nthFibonachiSeries(num){
    let firstNum = 0;
    let secondNum = 1;
    let nthFibonachi;

    if(num === 1){
        return 0;
    }

    if(num === 2){
        return 1;
    }

    for(let i = 1; i <= num; i++){
        nthFibonachi = firstNum + secondNum;
        firstNum = secondNum
        secondNum = nthFibonachi;
    }
    return nthFibonachi;
}

console.log(nthFibonachiSeries(6))

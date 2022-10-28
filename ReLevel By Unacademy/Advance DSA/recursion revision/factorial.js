// given a number n print all numbers in lexciographic order from 1 to n

function factorial(n) {
    if (n === 1) return 1;

    return n * factorial (n - 1)
}

console.log(factorial(4));


function fibonachi(n) {

    if (n === 1) return 1;

    if (n === 0) return 0;

    return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(6));
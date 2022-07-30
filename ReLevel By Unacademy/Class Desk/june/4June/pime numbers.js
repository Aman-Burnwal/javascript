// Prime Numbers
// Problem – Given a number N. You need to find all prime numbers less than or equal to N. For
// example –
// Input – 7
// Output – 2,3,5,7
// Approach – We can traverse through the numbers starting from 2 to N and check if the
// number is prime number. We can use Loops to iterate through the numbers.
// Steps -
// 1) Iterate through 1 to N
// 2) Check if number is prime number
// 3) If yes, print prime number

/*
// approch 1
console.log(primeNum(11));

function primeNum (N) {
    if(N <= 1) {
        return false
    }
    let isPrime, primeNUmber = 2;

    for(let i = 3; i <= N; i++) {
        isPrime = true;
        for (let j = 2; j < i; j++) {
            if(i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime === true) {
            primeNUmber += "," + i 
        }
    }
    
    return primeNUmber;
}

*/

function isprime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function findingAllPrimeNumber(num) {
    if(num < 2) {
        return false;
    }

    let array = new Array;

    for(let i = 2; i <= num; i++) {
        if(isprime(i) === true ) {
            array.push(i);
        }
    }

    return array;
}

console.log(findingAllPrimeNumber(7))
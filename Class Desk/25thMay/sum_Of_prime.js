// 10. Sum OF Prime (20 min):

// Problem Statement:
// Given a number A which is an even integer, you need to print two prime numbers whose sum will be
// equal to A.
// Constraint: A>2


// Example-1:
// Input 4
// Output 2,2

// Example-2:

// Input 15
// Output 2,13


function PrimeNumbers(num) {
    let array = [2, 3];
        for(let i = 4; i < num; i++){
            let a = true;
            for(let j = 2; j < i; j++){
                if(i % j === 0){
                    a = false;
                    break;
                }
            }
            if(a === true){
                array.push(i)
            }
        }
    return array;
}

function sumOfNum(num1){
    if(num1 < 1){
        return -1;
    }
    let num = PrimeNumbers(num1);
    // return console.log(num);
    let length = num.length - 1;
    for(let i = length; i >= 0; i--) {
        for(let j = i; i >= 0; j--){
            if(num[i] + num[j] === num1){
                console.log("your num is: ", (num[j] , num[i]));
                return;
            }
        }
    }
}

// console.log(sumOfNum(15))
sumOfNum(15);


function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}
function sumPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (isPrime(i) && isPrime(n - i)) {
            console.log(i, n - i);
            return;
        }
    }
}

sumPrime(150);
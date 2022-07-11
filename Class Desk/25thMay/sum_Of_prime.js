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
            a === true ? array.push(i) : "";
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
    for(let i = 0; i <= length; i++) {
        for(let j = i; i <= length; j++){
            if(num[j] + num[i] === num1){
                return console.log("your num is: ", (num[j] , num[i]));
            }
        }
    }
}

// console.log(sumOfNum(15))
sumOfNum(15);
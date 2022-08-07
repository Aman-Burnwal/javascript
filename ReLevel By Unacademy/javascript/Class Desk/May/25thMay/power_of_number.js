// 6. Power of a Number (20 min) :

// Problem Statement:
// Given two numbers A and B, You are supposed to find A to power B without using any built -in function.

// Example:

// Input num=10, power=2
// Output 100

// Explanation:
// 10 ^ 2 = 100

function power(number, power) {
    let result = 1;

    while (power > 0) {
        result *= number;
        power -= 1;
    }
    return console.log(result);
}

// power(2, 2);


function computePower(num, power) {
    let result = 1;
    while (power > 0) {
        if (power & 1)
            result = result * num;
        power = power >> 1;
        num = num * num;
    }
    return result;
}
let number = 10;
let power1 = 2;
console.log(computePower(number, power1));
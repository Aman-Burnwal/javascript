/* Power of a Number
Problem Statement:
Given two numbers A and B, You are supposed to find A to power B without using any built -in
function.
Input - num=10, power=2
Output - 100
Explanation:
To compute the power of the number without using the in built function, we can simply multiply the
number to itself the given number of times. I.e. 4 ^ 3 = 4 * 4 * 4 = 64.

*/


function powerIs(num, power) {
    let result = 1;
    while (power >= 1) {
        result *= num;
        power--;

    }
    console.log(result);
    return;

}
powerIs(2, 3)


// Optimized Solution:
// In the previous solution the while loop was iterating n number of time, where n was equal to the value
// of power. But in the optimized solution this iteration is reduced to half by using a right shift operator
// for each iteration. Whenever the power value becomes odd, we can multiply the number with the
// resultant and store it in the resultant else; we simply update the number by multiplying it.
// To check if number is even or odd We can perform a bit-wise operation. If the result is one, then the
// number is odd else even.


function computePower(num, power) {
    var result = 1;

    while (power > 0) {
        if ((power & 1) == 1)
            result = result * num;

        power = power >> 1;
        num = num * num;
    }
    return result;
}


var number = 10;
var power = 2;
console.log(computePower(number, power));

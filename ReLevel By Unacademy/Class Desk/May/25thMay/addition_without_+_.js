// 7. Summation Less Adding ( 15 min )
// BED-Class #180DaysofPurpose
// Problem Statement:
// Given two numbers A and B, You are supposed to find the sum of A and B without using the addition
// operator i.e. `+`
// Example:
// Input A = 10
// B = 5
// Output 15
// Explanation:
// 10 + 5 = 15

function add(x, y) {
    while (y != 0) {
        //calculate Carry
        let carry = x & y; //bitwise AND operator

        //sum of bits
        x = x ^ y;

        //left shift by 1 on carry
        y = carry << 1;
    }

    return x;
}

console.log(add(2, 3))



function add(num1, num2)
{
 while(num2!=0){
    let carry = num1 & num2;
    num1 = num1 ^ num2;
    num2 = carry << 1;
 }
 return num1;
}
let num1 = 10;
let num2 = 5;
console.log(num1 ," + ",num2," = ",add(num1,num2));



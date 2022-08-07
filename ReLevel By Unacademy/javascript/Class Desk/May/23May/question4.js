// Write a program to find the HCF or GCD of two integers

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("your number1 => "))
let num2 = parseInt(prompt("your number2 => "))
let small, big;
if(num1 > num2){
    small = num2;
    big = num1;
}else{
    small = num1;
    big = num2;
}
let hcf = 1;
for(let i = 0; i <= small; i++){
    if(small % i === 0 && big % i === 0){
        hcf = i;
    }
}
console.log(hcf);
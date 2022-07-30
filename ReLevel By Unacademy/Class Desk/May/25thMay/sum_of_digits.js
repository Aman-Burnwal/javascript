// 5. Sum of Digits (15 min) :

// Problem Statement:
// Given a positive number you need to write a program in javascript to find the sum of the inner digits of
// that number.
// Example-1:
// Input 2124
// Output 3
// Example-2:
// Input 70
// Output 70

function sumOfInnerDigits(num){
  let sum = 0;

  if(num < 100){
      return -1;
  }

  num = Math.floor(num / 10);

  while(num > 9){
    sum += num % 10;
    num = Math.floor(num /10);
  }

  return sum
}

let a = sumOfInnerDigits(12534);
console.log(a);

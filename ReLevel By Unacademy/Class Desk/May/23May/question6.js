// Problem 6 –
// Create a program to find the largest amongst given 3 numbers. 

const num1 = 4;
const num2 = 8;
const num3 = 3;


let largest;

if(num1 > num2 && num1 > num3){
    largest = num1;
} else if(num2 > num1 && num2 > num3){
    largest = num2;
} else {
    largest = num3;
}

console.log(largest);


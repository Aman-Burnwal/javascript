// Problem 8 –
// Find if a given number is an Armstrong number or not.
// Hint : Armstrong number is a number that is equal to the sum of cubes of its digits
// Solution Approach -
// Find all the digits of the number (in our example find the ones, tens and hundreds place digit) and then
// find their cubes and add them to validate against the original number.



let num = 153;
let org = num
let sum = 0;
let armstrong = "";

while(num > 0){
        sum += ((num % 10) * (num % 10) * (num % 10));
        num = Math.floor(num / 10);
        sum === org ? armstrong = "yes" : armstrong = "No";
}

console.log(armstrong);

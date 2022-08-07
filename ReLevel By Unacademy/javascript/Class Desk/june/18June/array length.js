// What is the output of the below code?


let array = [1, 2, 3, 4];

array[100] = 134;

console.log(array.length)
// Explanation: The reason for this solution is as follows: JavaScript places empty as a value for indices 3 - 99.
// Thus, when you set the value of the 100th index

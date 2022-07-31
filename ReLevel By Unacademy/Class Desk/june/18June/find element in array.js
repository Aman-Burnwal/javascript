// Write a program to find the particular element in an array using find function. (Input array:
//     [‘a’, ‘b’, ‘c’, ‘z’, ‘h’]) find ‘c’


let arr = ['a', 'b', 'c', 'd', 'e'];

let val = 'a';
let found = arr.find((x) => x === val );

console.log(found);

//Two ways to add/remove elements in an array
//First way: adding/removing elements at the end of the array
let arr = [7, 3, 4, 5]

arr.push(111);

console.log(arr)

arr.pop();

arr.pop();

console.log(arr)

//Add/remove elements from anywhere in the array
//arr.splice(index, remove_count, item1, item2, ..., itemN)
let arr2 = [3, 4, 7, 8, 9];

//Remove 2 elements after index 1, and add 111, 222 after it
//arr2.splice(1, 2, 111, 222);
console.log(arr2)

//Negative index: Remove 2 elements from the 2nd position at end and add 3 elements 777, 888, 999
arr2.splice(-2, 2, 777, 888, 999)
console.log(arr2)

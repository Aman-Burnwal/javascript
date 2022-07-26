"use strict"


// works in browser 
// error in sort in vs code
function findMaxSumOfPairs(arr) {
    arr = arr.sort((a, b) => a > b);

    let maxSum = 0;

    for (let i = 0; i < arr.length; i = i + 2) {
        maxSum = maxSum + arr[i];
    }

    return maxSum;
}



let arr = [2, 1, 3, 4]
arr = arr.sort((a, b) => a > b);
console.log(arr)

// Move all negative numbers to the end and positive to the beginning of the array without using any
// predefined sorting method 

// An array contains both positive and negative numbers in random order. Rearrange the array
// elements so that all positive numbers appear before all negative numbers

// Example: 
// Input:
// arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9];
// n = arr.length;
// Output: 
// [9, 2, 8, 4, 5, 6, -7, -3, -1]

let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9];
let n = arr.length;
console.log(positiveAndNegative(arr, n));

function positiveAndNegative (arr, n) {
    for(let i = 0; i < n; i++) {
        if(arr[i] > 0) {
            continue;
        }
        let temp = arr[i];
        arr[i] = arr[n - 1];
        arr[n - 1] = temp;
        n--;
    }
    return arr;

}
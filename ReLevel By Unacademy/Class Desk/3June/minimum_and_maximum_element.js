// Problem – Given an array of numbers. Your task is to find the minimum and maximum element. For example –
// Input – [2,3,15,6]
// Output –
// Minimum element - 2
// Maximum element - 15
// Approach – We can use linear search technique in this.
// Steps -
// 1) Initialize min and max to minimum and maximum of first 2 elements
// 2) Iterate through array from index 3rd and update min and max respectively after comparison
// 3) Return the output


const arr = [1, 2];
minAndMax(arr);

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));


function minAndMax (arr) {
    let min = arr[0];
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i]
        }
    }

    return console.log(min, max);
}
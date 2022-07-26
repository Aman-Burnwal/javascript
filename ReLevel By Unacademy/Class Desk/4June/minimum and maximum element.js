// Minimum and Maximum Element
// Problem – Given an array of numbers. Your task is to find the minimum and maximum
// element. For example –
// Input – [2,3,15,6]
// Output –
// Minimum element - 2
// Maximum element - 15
// Approach – We can use linear search technique in this.
// Steps -
// 1) Initialize min and max to minimum and maximum of first 2 elements
// 2) Iterate through array from index 3rd and update min and max respectively after
// comparison
// 3) We are using separate Pair class in this which will have 2 attributes to store minimum
// and maximum value
// 4) Return the output

const arr = [2,3,15,6];
minimumAndMaimum(arr);

function minimumAndMaimum (arr) {
    let length = arr.length;
    if(length === 1) {
        console.log("There is only one number so ", arr, " is maximum and minimum both");
        return ;
    }

    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }

        if(arr[i] < min) {
            min = arr[i];
        }
    }

    return console.log(`minmun is ${min} and max is ${max} in the array`);



}
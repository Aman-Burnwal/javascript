// Reverse Array
// Problem – Given an array of numbers. You need to reverse the array. 

// For example –
// Input – [1,2,3,4,5]
// Output – [5,4,3,2,1]
// Approach 1 – We can use recursion to get the desired output. Let’s see each step –
// 1) Initilaize two pointers - start=0, end = n-1 where n = number of elements
// in array
// 2) Swap elements present at start and end
// 3) Recursively call reverseArray function

const arr = [1, 2, 3, 4, 5, 6];


// console.log(arr.reverse());





console.log(reverseArray(arr, 0, arr.length - 1))

function reverseArray (arr, start, end ) {
    if(start > end) {
        return;
    }

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(arr, start+1, end-1);
    return arr;
}


// Shift Negative elements to the end of an array
// Problem – Given an array. You need to shift negative elements to the end of an array. For example –

// Input – { -5, 3, -4, 88, -9, -10, 21, 5, 6}
// Output – { 3, 88, 21, 5, 6, -5, -4, -9, -10 }

// Approach 1(With extra space) – We can use a temp array to store the values. First store all positive numbers in
// the temp array and then negative numbers. Then copy temp array to original array
// Intuition - Our main task is to rearrange the numbers in the given array. We can use conditions on elements to
// check if they are positive or negative and then apply operations.
// Time Complexity –
// If there are N numbers in the given array arr, then complexity will be O(N)
// Space Complexity –
// If there are N numbers in given array arr, then complexity will be O(N)

// approach 1

const array = [-5, 3, -4, 88, -9, -10, 21, 5, 6]
// console.log(shifitingElements(array));
function shifitingElements(array) {
    let arr1 = new Array();
    let arr2 = new Array();
    let arr3 = new Array(array.length);


    for (let i = -0; i < array.length; i++) {
        if (array[i] >= 0) {
            arr1.push(array[i]);
        } else {
            arr2.push(array[i])
        }
    }

    arr3 = arr1.concat(arr2);
    return arr3;
}

// approch 2

function shiftNegativeElements(arr) {
    let n = arr.length;
    let tempArray = new Array(n);
    let j = 0;

    for (let i = 0; i < n; i++)
        if (arr[i] >= 0)
            tempArray[j++] = arr[i];

    if (j == n || j == 0)
        return;

    for (let i = 0; i < n; i++)
        if (arr[i] < 0)
            tempArray[j++] = arr[i];

    for (let i = 0; i < n; i++) arr[i] = tempArray[i];
}


let arr = [-5, 3, -4, 88, -9, -10, 21, 5, 6];


shiftNegativeElements(arr);

// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i] + " ");
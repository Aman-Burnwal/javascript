// Cyclically Rotate Array by 1
// Cycle Rotation – Cycle rotation is the rotation in which one rotation moves the last element of an array to the first
// place and shifts the remaining elements to the right.
// Problem – Given an array. You need to shift all elements to the right by 1 and finally cyclically rotate the whole
// array. For example –
// Input – { 3, 88, 21, 5, 6}
// Output – { 6,3, 88, 21, 5}
// Approach – We can use two pointers like i and j which will point to the first and last elements of an array. We need
// to swap i and j till i is not equal to j.
// Intuition - Here, we need to keep j fixed and move i to the right direction
// Time Complexity –
// If there are N numbers in the given array arr, then
// complexity will be O(N)
// Space Complexity –
// If there are N numbers in given array arr, then
// complexity will be O(1)


const arr = [3, 88, 21, 5, 6];
cyclicallyRotate(arr);
console.log(arr);

function cyclicallyRotate (array) {
    let length = array.length - 1;
    

    for(let i = length; i != 0; i--) {
        let temp = array[i];
        array[i ] =  array[i - 1];
        array[i - 1] = temp;
        

    }
}


// Given an array, rotate the array by one position in clock - wise direction.


//     Example 1:

// Input:
// N = 5
// A[] = { 1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4
 

// Example 2:

// Input:
// N = 8
// A[] = { 9, 8, 7, 6, 4, 2, 1, 3}
// Output:
// 3 9 8 7 6 4 2 1
 

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function rotate() which takes the array A[] and its size N as inputs and modify the array in place.

 

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)


// Constraints:
// 1 <= N <= 105
// 0 <= a[i] <= 105

//User function Template for javascript



/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution {
    rotate(arr, n) {
        //code here

        let temp = arr[n - 1];
        arr.pop();
        arr.unshift(temp);
        return arr
    }
}



// const arr = [3, 88, 21, 5, 6];

// console.log(cyclicRotation(arr, arr.length));
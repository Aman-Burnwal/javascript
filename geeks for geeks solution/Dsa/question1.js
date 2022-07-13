// Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.



// Example 1:

// Input:
// N = 5, K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: First group consists of elements
// 1, 2, 3. Second group consists of 4,5.


/// { Driver Code Starts
//Initial Template for javascript
'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });

//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// function main() {
//     let t = parseInt(readLine());
//     let i = 0;
//     for(;i<t;i++)
//     {
//         let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
//         let N = input_ar0[0];
//         let K = input_ar0[1];
//         let arr = new Array(N);
//         let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
//         for(let i=0;i<N;i++)
//             arr[i] = input_ar1[i];
//         let obj = new Solution();
//         obj.reverseInGroups(arr, N, K);
//         let S = '';
//         for(let i=0;i<N;i++)
//         {
//             S+=arr[i];
//             S+=' ';
//         }
//         console.log(S);
//     }
// }// } Driver Code Ends


// //User function Template for javascript

// /**
//  * @param {number[]} arr
//  * @param {number} n
//  * @param {number} k
//  */

// class Solution {
//Function to reverse every sub-array group of size k.
function reverseInGroups(arr, n, k) {
    // code here
    for (let i = 0; i < n; i += k) {
        let left = i;

        // To handle case when k is not
        // multiple of n
        let right = Math.min(i + k - 1, n - 1);
        let temp;

        // Reverse the sub-array [left, right]d
        while (left < right) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
    }
    return arr;
}
// }

let N = 5, K = 3
let arr = [1, 2, 3, 4, 5]

console.log(reverseInGroups(arr, N, K));
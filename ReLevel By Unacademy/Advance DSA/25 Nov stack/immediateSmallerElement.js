/**
 * @param {number[]} arr
 * @param {number} n
*/

class Solution {
    immediateSmaller(arr, n) {
        //code here

        let stack = [];


        for (let i = 0; i < n - 1; i++) {

            arr[i] > arr[i + 1] ? arr[i] = arr[i + 1] : arr[i] = -1;
        }

        arr[n - 1] = -1;
        return;

    }

}

console.log(immediateSmaller( [4, 2, 1, 5, 3], 5))
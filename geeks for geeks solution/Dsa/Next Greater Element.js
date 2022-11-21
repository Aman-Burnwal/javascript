
/**
 * @param {BigInt[]} arr
 * @param {number} n
 * @returns {BigInt[]}
*/
class Solution {
    //Function to find the next greater element for each element of the array.
    nextLargerElement(arr, n) {
        // code here

        let stack = [];
        let result = [];

        for (let i = n - 1; i >= 0; i--) {

            while (stack.length && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }

            result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
            stack.push(arr[i]);
        }
        return result;
    }


}
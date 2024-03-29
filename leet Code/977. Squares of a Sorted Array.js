/**
 * question link https://leetcode.com/problems/squares-of-a-sorted-array/
 */


/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
 */



/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function (nums) {

    let start = 0;
    let end = nums.length - 1;
    let newArray = [];

    while (start <= end) {

        if (Math.abs(nums[start]) >= Math.abs(nums[end])) {

            newArray.unshift(nums[start] * nums[start])


            start++;
        } else {

            newArray.unshift(nums[end] * nums[end]);

            end--;
        }


    }

    return newArray;

};

// var sortedSquares = function (nums) {

//     nums = nums.map(index =>  ( Math.pow(index, 2) ) )

//     nums = nums.sort((a, b) => (a - b))

//     return nums;

// };




const nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums))
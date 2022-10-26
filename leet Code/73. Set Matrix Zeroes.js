/**
 * question link https://leetcode.com/problems/move-zeroes/submissions/
 */

/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {

        // console.log(nums[i])
        if (nums[i] == 0 ) {
            nums.splice(i, 1);
            nums.push(0);
            
        } 
        
        // console.log(nums)
    }

    return nums;

};

const nums = [0, 0, 0, 0, 0, 0, 1]

console.log(moveZeroes(nums))



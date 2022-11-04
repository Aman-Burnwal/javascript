// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in -place without making a copy of the array.



//     Example 1:

// Input: nums = [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Example 2:

// Input: nums = [0]
// Output: [0]



// Constraints:

// 1 <= nums.length <= 104
//     - 231 <= nums[i] <= 231 - 1

//
// Follow up: Could you minimize the total number of operations done ?


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0; 
    let right = nums.length - 1;

    while (left <= right) {

        if (nums[right] === 0) right--;
        
        if (nums[left] !== 0) {
            left++;
        } else {
            nums.splice(left, 1);
            nums.push(0);
            right--;
        }


    } 
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
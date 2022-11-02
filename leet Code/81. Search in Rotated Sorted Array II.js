// There is an integer array nums sorted in non - decreasing order(not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k(0 <= k < nums.length) such that the resulting array is[nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]](0 - indexed).For example, [0, 1, 2, 4, 4, 4, 5, 6, 6, 7] might be rotated at pivot index 5 and become[4, 5, 6, 6, 7, 0, 1, 2, 4, 4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.



//     Example 1:

// Input: nums = [2, 5, 6, 0, 0, 1, 2], target = 0
// Output: true
// Example 2:

// Input: nums = [2, 5, 6, 0, 0, 1, 2], target = 3
// Output: false


// Constraints:

// 1 <= nums.length <= 5000
//     - 104 <= nums[i] <= 104
// nums is guaranteed to be rotated at some pivot.
// - 104 <= target <= 104
 

// Follow up: This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates.Would this affect the runtime complexity ? How and why ?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;


    while (left <= right) {

        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target || nums[left] === target || nums[right] === target) return true;

        if (nums[left] === nums[right]) {

            left++;
            right--;
        } else if (nums[left] <= nums[mid]) {


            nums[left] <= target && nums[mid] >= target ? right = mid - 1 : left = mid + 1;

        } else {

            nums[mid] < target && nums[right] >= target ? left = mid + 1 : right = mid - 1;

        }


    }

    return false;

};

const nums = [1, 0, 1, 1, 1], target = 0;

console.log(search(nums, target));
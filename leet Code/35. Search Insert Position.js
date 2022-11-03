// Given a sorted array of distinct integers and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



//     Example 1:

// Input: nums = [1, 3, 5, 6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1, 3, 5, 6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1, 3, 5, 6], target = 7
// Output: 4


// Constraints:

// 1 <= nums.length <= 104
//     - 104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// - 104 <= target <= 104


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    // if (nums.includes(target)) {
    //     return nums.indexOf(target)
    // }
    
    if (nums[nums.length - 1] < target) return nums.length;
    if (nums[0] > target) return 0;
    let left = 0, right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target ) {
            return mid;
        }

        if (nums[mid] > target && nums[mid - 1] < target) {
            return mid;
        }

        

        nums[mid] < target ? left = mid + 1 : right = mid - 1;
    }



    
};


nums = [1, 3], target = 2

console.log(searchInsert(nums, target));


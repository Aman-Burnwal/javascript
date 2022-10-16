/**
 * question link : - https://leetcode.com/problems/binary-search/?envType=study-plan&id=algorithm-i
 */



/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let start = 0
    let end = nums.length;


    while (start <= end) {
        
        let mid = Math.floor((start + end) / 2);


        if (nums[mid] === target) return mid;
        

        (nums[mid] < target )? start = mid + 1 : end = end - 1;
        
        

    }

    return -1

};


const nums = [-1, 0, 3, 2, 9, 12], target = 5;

console.log(search(nums, target));
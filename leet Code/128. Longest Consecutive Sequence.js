// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



//     Example 1:

// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is[1, 2, 3, 4].Therefore its length is 4.
// Example 2:

// Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// Output: 9


// Constraints:

// 0 <= nums.length <= 105
//     - 109 <= nums[i] <= 109
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    
    // if nums length is 0 then no need to do any action so are returning 0 as default.
    if (nums.length === 0) return 0;

    // creating an object to stroe the elments of array
    let numsObj = {};

    // default result is 1
    let result = 1;

    // storing our nums(array) elements in new object as key and value
    for (let i = 0; i < nums.length; i++) {

        // our element will be object keys and value will be true 
        // here i am storing boolean as a value because 0 is a false value and it can create a bug
        numsObj[nums[i]] = true;
    }


    // loop will one by one check whether current element can be starting point or not ?
    for (let i = 0; i < nums.length; i++) {

        
        let curr = nums[i];

        // this is to check the starting number
        // if we get undefined as a previous number in our object it means there is no previous number of current number 
        // so we can assume it a starting number
        if (!numsObj[curr - 1]) {

            // starting number is our current number 
            let start = curr;

            // default len is 1 of consecutive sequence
            let len = 1;

            // this loop will run untill we get true
            // it means whenever we have next number of starting number in our object
            // it goes to next itteration
            // and our len will icrease as loop itrates 
            while (numsObj[start + 1]) {
                start++;
                len++;
            }

            // getting the maximum times of itteration of consecutive sequece
            result = Math.max(result, len);
        }
    }

    
    return result;



};

nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(nums));
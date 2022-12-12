/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function (nums, k) {



    if (nums.length === 1 || k % 2) return -1;

    // finding number of times nums will move
    let len = nums.length;
    // if k is greater than nums.size than it will move nums.size;

    if (len < k)
        k = len;
    else if (len === k)
        k = len;
    else 
    

    (k > nums.length) ? k = nums.length : k = k + 1;
    let topMost = nums[0];

    for (let i = 0; i < k; i++) {

        topMost = Math.max(topMost, nums[i]);
        console.log(topMost, nums[i])
    }

    return topMost;



};

const nums =
    [73, 63, 62, 16, 95, 92, 93,
    52, 89, 36, 75, 79, 67,
    60, 42, 93, 93, 74, 94,
    73, 35, 86, 96]

console.log(maximumTop(nums, 59))
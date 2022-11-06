/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {


    // for (let i = 0; i <= nums.length; i++) {

    //     if (!nums.includes(i)) return i;

    // }

    let len = nums.length + 1;

    let sum = len * (len - 1) / 2

    nums.forEach(a => sum -= a);

    return sum
    
};

console.log(missingNumber([0, 1]))
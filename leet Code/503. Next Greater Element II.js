/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {


    let stack = [];
    let output = [];

    for (let i = 2 * (nums.length - 1); i >= 0; i--) {

        let Index = i % nums.length;
        

        while (stack.length > 0 && nums[Index] >= nums[stack[stack.length - 1]]) {

            stack.pop();
        }

        stack.length === 0 ? output[Index] = -1  :  output[Index] = nums[stack[stack.length - 1]]
        

        stack.push(Index);
    }

    return output;
};
const nums = [1, 2, 1];
console.log(nextGreaterElements(nums));
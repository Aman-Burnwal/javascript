// your code goes here
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function (nums) {

    let ans = [];
    for (let i = 0; i < nums.length - 2; i++) {

        let count = 0;
        let j = i + 1;
        let found = false;
        for (j; j < nums.length; j++) {

            if (nums[i] < nums[j]) count++;

            if (count === 2) {
                found = true;
                break;
            }
        }
        // console.log(found)
        let temp = nums[j]
        found ? ans[i] = temp : ans[i] = -1;
    }
    ans.push(-1);
    ans.push(-1);
    return ans;

};
// [1, 17, 18, 0, 18, 10, 20, 0]
// [18, 20,  0, 20,  0,  0, -1, -1]
// [18, 18, -1, 10, -1, -1, -1, -1]
console.log(secondGreaterElement([1, 17, 18, 0, 18, 10, 20, 0]))
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    const n = nums.length
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2
            nums[i + 1] = 0
        }
    }
    const res = nums.filter(e => e !== 0)
    while (res.length !== n) res.push(0)
    return res

};

const arr =[847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272];
// const [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(applyOperations(arr));
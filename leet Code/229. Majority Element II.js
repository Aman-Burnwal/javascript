/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {


    let map = {};
    let max = Math.floor(nums.length / 3);


    for (i of nums) {

        map[i] = (map[i] || 0) + 1;

    }


    let ans = [];


    for (i in map) if (map[i] > max) ans.push(Number(i));

    return ans;

};

console.log(majorityElement([3, 2, 3]))
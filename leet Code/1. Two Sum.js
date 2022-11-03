

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let temp = map.get(nums[i]);
            temp += 1;
            map.set(nums[i], temp)
        } else {
            map.set(nums[i], 1)
        }
    }

    for (let i = 0; i < nums.length; i++) {

        let value = target - nums[i];
        let data = nums.has[value]

        if (data !== undefined) {

            if (nums[i] + nums[i] === target && data > 1) {

                return [i, nums.lastIndexOf(value)]

            } else if (nums[i] + nums[i] !== target) {
                
                return [i, nums.indexOf(value)]
            }
        }


    }

};
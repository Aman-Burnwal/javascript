/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {

    let subset = [];
    nums.sort((a, b) => a - b);

    let map = {};

    subsetGenerator(nums, 0, [], subset, map);

    return subset;
};


function subsetGenerator(nums, index, helper_subset, subset, map) {


    if (index >= nums.length) {
        if (!map[helper_subset]) {
            subset.push(helper_subset);
            map[helper_subset] = helper_subset;

        }

        return;
    }


    // map[helper_subset] = helper_subset;
    subsetGenerator(nums, index + 1, [...helper_subset], subset, map);

    helper_subset.push(nums[index])


    subsetGenerator(nums, index + 1, [...helper_subset], subset, map)




}
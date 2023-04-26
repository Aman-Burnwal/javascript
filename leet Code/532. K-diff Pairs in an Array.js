/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {

    // nums.sort((a, b) =>  a - b);


    // let j = 1; 
    // let i = 0;
    // let count = 0;
    // let len = nums.length;

    // while(i < len && j < len) {

    //     if(nums[j] - nums[i] === k) {

    //         count++;
    //         i++;
    //         j++;

    //         while(j < len && nums[j] === nums[j - 1] ) j++;
    //     } 

    //     else if(nums[j] - nums[i] > k) {
    //         i++;
    //         if(j - i === 0)j++; 
    //     } else j++


    // }
    // return count;


    let map = {};


    for (i of nums) {

        map[i] = (map[i] || 0) + 1;

    }
    let count = 0;
    let key = Object.keys(map);

    for (let i = 0; i < key.length; i++) {

        if ((!k && map[parseInt(key[i])] > 1) || (map[parseInt(key[i]) + k] && k !== 0)) count++
    }

    return count;



};
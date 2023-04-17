// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let count = 0;

    while (num > 0) {
        
        num = num & 1 === 1 ? --num : num >> 1;
        count++;
        // console.log(num);

    }
    return count;

};


console.log(numberOfSteps(13))
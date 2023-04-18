// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {


    let map = new Map();

    for (let i of allowed) map.set(i);

    let count = 0;
    for (let i of words) {

        let consistent = true;
        for (let j of i) {

            if (!map.has(j)) {
                consistent = false;
                break;
            }
        }
        if (consistent) count++;
    }
    return count;

};
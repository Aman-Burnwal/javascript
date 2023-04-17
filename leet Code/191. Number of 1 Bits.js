/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {

    n = n.toString(2);

    let count = 0;

    for (let i of n) if (i == 1) count++;

    return count;

};
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let ans = 0;

    for (let i = 0; i < n; i++) {

        ans ^= start + 2 * i;

    }

    return ans;
};
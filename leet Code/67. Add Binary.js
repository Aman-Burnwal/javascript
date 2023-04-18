// https://leetcode.com/problems/add-binary/description/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    let alen = a.length - 1;
    let blen = b.length - 1;

    let maxLen = Math.max(alen, blen);


    let carry = 0;
    let sum = ""

    while (maxLen >= 0) {

        let val1 = a[alen] || 0;
        let val2 = b[blen] || 0;
        alen--;
        blen--;

        let total = carry + parseInt(val1) + parseInt(val2);


        if (total === 0 || total === 1) {
            sum = total === 0 ? "0" + sum : "1" + sum;
            carry = 0;
        }

        else if (total === 2) {
            carry = 1;
            sum = "0" + sum;
        }
        else {
            carry = 1;
            sum = "1" + sum;
        }
        maxLen--;

    }

    if (carry) sum = "1" + sum;

    return sum;

};
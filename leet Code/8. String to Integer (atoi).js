/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

    let slen = s.length;

    let sign = 1;
    let start = 0;
    let end = 0;

    for (let i = 0; i < slen; i++) {

        if (s.charAt(i) == ' ') {
            continue;
        }

        if (s.charAt(i) == '-' || s.charAt(i) == '+') {
            sign = s.charAt(i) == '-' ? -1 : 1;
            start = i + 1;
            end = i + 1;
            break;
        }

        if (s.charAt(i) >= '0' && s.charAt(i) <= '9') {
            start = i;
            end = i;
            break;
        }

        return 0;
    }

    for (let i = start; i < slen; i++) {

        if (s.charAt(i) >= '0' && s.charAt(i) <= '9') {
            end = i;
        } else {
            break;
        }
    }

    let result = 0;

    for (let i = start; i <= end; i++) {
        result = result * 10 + (s.charAt(i) - '0');
    }

    result = result * sign;

    if (result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }

    if (result < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    }

    return result;

};
/**
 * @param {string} s
 * @return {number}
 */
// var myAtoi = function (s) {
//     const res = Number.parseInt(s)
//     if (!Number.isInteger(res)) return 0;
//     if (res > 2 ** 31 - 1) return 2 ** 31 - 1;
//     if (res < 2 ** 31 * -1) return 2 ** 31 * -1;
//     return res;
// };
let ans = myAtoi("-91283472332");
console.log(ans);
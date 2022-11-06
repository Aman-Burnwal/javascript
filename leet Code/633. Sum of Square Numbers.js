/**
 * @param {number} c
 * @return {boolean}
 */

// two pointer approach
var judgeSquareSum = function (c) {

    let l = 0;
    let r = Math.floor(Math.sqrt(c));

    while (l <= r) {


        if (((l * l) + (r * r)) === c) return true;

        if ((l * l + r * r) > c) {
            r--;
        } else {
            l++;
        }


    }
    return false;


};


// binary search

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {

    let l = 0;
    let r = Math.floor(Math.sqrt(c));

    while (l <= r) {

        let mid = Math.floor((l + r) / 2);


        if (((l * l) + (r * r)) === c) return true;

        if ((l * l + mid * mid) >= c) {
            right = mid;
        } else {
            left = mid;
        }


    }
    return false;


};
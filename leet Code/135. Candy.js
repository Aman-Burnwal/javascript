/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {

    if (ratings.length === 1) return 1;
    let left = [];
    let right = [];

    // filling by default 1
    for (let i = 0; i < ratings.length; i++) {
        left[i] = 1;
        right[i] = 1;
    }


    // left neighbour; 
    for (let i = 1; i < ratings.length; i++) {

        (ratings[i - 1] < ratings[i]) ? left[i] = left[i - 1] + 1 : left[i] = 1;
    }

    // right neighbour
    for (let i = ratings.length - 2; i >= 0; i--) {

        ratings[i + 1] < ratings[i] ? right[i] = right[i + 1] + 1 : right[i] = 1;
    }


    let ans = 0

    for (let i = 0; i < left.length; i++) {
        ans += Math.max(left[i], right[i])
    }

    return ans;

    

};
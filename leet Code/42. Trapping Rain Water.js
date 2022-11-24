/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    let left_nge = [height[0]];

    let water_trapped = 0;

    for (let i = 1; i < height.length; i++) {

        left_nge[i] = Math.max(left_nge[i - 1], height[i]);
    }


    let right = 0;
    let ans = 0;
    for (let i = height.length - 1; i >= 0; i--) {

        right = Math.max(right, height[i])

        ans += (Math.min(left_nge[i], right) - height[i])


    }

    return ans;
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

    let result = [];

    for (let i = 0; i < nums1.length; i++) {

        let temp = nums1[i];

        let ind = nums2.indexOf(temp);
        let g = -1;

        for (let j = ind + 1; j < nums2.length; j++) {

            if (temp < nums2[j]) {
                g = nums2[j]
                break;
            }
        }
        result.push(g);
    }
    return result;
};
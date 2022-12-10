/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    let m = nums1.length - 1;
    let n = nums2.length - 1;

    let i = 0;
    let j = 0;
    let ans = [];

    let k = 0;

    while (i <= m && j <= n) {

        if (nums1[i] < nums2[j]) {
            ans[k] = nums1[i];
            i++
        } else {
            ans[k] = nums2[j];
            j++;
        }
        k++
    }

    while (i <= m) {
        ans[k] = nums1[i];
        i++, k++;
    }

    while (j <= n) {
        ans[k] = nums2[j];
        j++, k++;

    }


    let len = ans.length;

    if (len % 2 == 0) {
        let add = parseInt(len / 2);
        return ((ans[add] + ans[add - 1]) / 2).toFixed(5);
    } else {
        return (ans[Math.floor(len / 2)]).toFixed(5)
    }

};
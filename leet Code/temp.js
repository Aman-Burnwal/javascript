/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let len1 = nums1.length;

    let len2 = nums2.length;

    let len3 = 0;

    const newarr = [];

    let i = 0, j = 0;

    while (i < len1 && j < len2) {
        if (nums1[i] <= nums2[j]) {
            newarr[len3] = nums1[i];
            i++;
        } else {
            newarr[len3] = nums2[j];
            j++
        }
        len3++;
        
    }
    
    while (i < len1) {
        newarr[len3] = nums1[i];
        i++, len3++;
    }

    console.log(newarr)

    while (j < len2) {
        newarr[len3] = nums2[j];
        j++, len3++
    }


    let rem = (len3) % 2;
    let mid = Math.floor(len3 / 2);

    // console.log(mid)
    

    return rem === 1 ? newarr[mid].toFixed(5) : ((newarr[mid] + newarr[mid  - 1]) / 2).toFixed(5);
};

const nums1 = [0, 0, 0, 0, 0], nums2 = [-1, 0, 0, 0, 0, 0, 1]
console.log(findMedianSortedArrays(nums1, nums2))
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {

    let l = 0;

    let r = nums.length - 1;

    if (r === 0) return nums[0];

    if (nums[0] !== nums[1]) return nums[0];

    if (nums[r] !== nums[r - 1]) return nums[r];

    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);

        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];

        if ((mid % 2 === 0 && nums[mid] === nums[mid + 1]) || (mid % 2 === 1 && nums[mid] === nums[mid - 1])) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }

    }

};
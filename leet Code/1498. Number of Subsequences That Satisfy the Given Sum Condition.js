/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {

    nums.sort((a, b) => a - b)

    let count = 0;

    for (let i = 0; i < nums.length; i++) {

        let t = helper(nums,i, i, nums.length - 1, target - nums[i]);

        count += t;
        count %= 1000000007;
        // console.log(count);

    }
    return count;


};


function helper(num,I, i, j, target) {

    while (i < j) {
        
        let mid = Math.floor((i + j) / 2);

        if (num[mid] === target) {
            
            while (num[mid] === num[mid + 1] ) m++;

            return Math.pow(2, mid - I) - 1
        }

        if (num[mid] < target) j = mid;
        else i = mid + 1;
        

    }

    // console.log(i, num)

    return Math.pow(2, j - I) - 1;
}


console.log(numSubseq([3, 5, 6, 7], 9))



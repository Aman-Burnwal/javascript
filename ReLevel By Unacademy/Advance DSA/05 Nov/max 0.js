const arr = [1, 1, 0, 1, 1, 0, 0, 0, 1];

// find longest subarray with greate number of 0s from 1s

// 1. brute force
// 2. sliding window
// 3. prefix sum

// 1. brute force
// time complexity: O(n^2)
// space complexity: O(1)
function maxZero(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] === 0) {
                count++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
}

// 2. sliding window
// time complexity: O(n)
// space complexity: O(1)
function maxZero(arr) {
    let max = 0;
    let count = 0;
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] === 0) {
            count++;
        }
        while (count > 1) {
            if (arr[left] === 0) {
                count--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
}


console.log(maxZero(arr));
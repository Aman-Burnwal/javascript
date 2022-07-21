// 1)	
// Find the longest subarray in an array which is having sum value as target

// Input Array -> [110, 15, 32, 7, 11, 19]

// Target -> 125

// Output -> 2
// let target = 125;
// const arr = [110, 15, 32, 7, 11, 19];
// console.log(subarrayLen(arr, target));

function subarrayLen(array, target) {
    let sum = 0;
    let subarraylen = 1;
    while (sum != target) {
        let j = 0;
        for (let i = j; i < array.length; i++) {
            sum += arr[i]
            if (sum === target) {
                subarraylen++;
                return subarraylen;
            }
        }
        j++
        sum = 0;
        subarraylen = 0;
    }
}


function lengthOfLongestSubarray(arr, n, k) {
    var um = new Map();
    var sum = 0, maxLen = 0;
    for (var i = 0; i < n; i++) {
        sum += arr[i];
        if (sum == k) {
            maxLen = i + 1;
        }
        if (!um.has(sum)) {
            um.set(sum, i);
        }
        if (um.has(sum - k)) {
            if (maxLen < (i - um.get(sum - k))){
                maxLen = i - um.get(sum - k);
            }
        }

    }
    return maxLen;
}


var inputArray = [110, 15, 32, 7, 11, 19];
var n = inputArray.length;

var target = 18;

console.log("Length of SubArray = " + lengthOfLongestSubarray(inputArray, n, target));
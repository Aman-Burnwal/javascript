// Given a string s, find the first non - repeating character in it and return its index.
// If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1


// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let temp = map.get(s[i]);
            temp++;
            map.set(s[i], temp)
        } else {
            map.set(s[i], 1)
        }
    }
    

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }


    return -1;



};

// console.log(firstUniqChar("leetcode"));
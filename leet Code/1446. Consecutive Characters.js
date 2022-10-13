// The power of the string is the maximum length of a non - empty substring that contains only one unique character.

// Given a string s, return the power of s.



//     Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
//     Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.


//     Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.


/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {

    if (s.length === 0) return 0;

    let max = 1; 
    let maxelement = 1;

    for (let i = 1; i < s.length; i++) {
        
        if (s[i] === s[i - 1]) {
            max++;
        } 
        else {
            max = 1;
        }
      
        maxelement = Math.max(max, maxelement);
    }
    return maxelement;
 
};

console.log(maxPower("j"))

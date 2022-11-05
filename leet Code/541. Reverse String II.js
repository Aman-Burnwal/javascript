// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them.If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.



//     Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"



// Constraints:

// 1 <= s.length <= 104
//     s consists of only lowercase English letters.
//     1 <= k <= 104


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {

    s = s.split("");
    let len = s.length;
    let reverse = k - 1;
    
    for (let i = 0; i < len; i+= 2 * k) {
        
        let left = i;
        let right = i + k - 1;

        while (left < right) {
            
            if (s[right] === undefined) {
                right--
                continue;
            }

            [ s[left], s[right] ] = [ s[right], s[left] ]

            left++;
            right--;
            
        }

    }

    return s.join("")
};


const s = "abcde", k = 2

console.log(reverseStr(s, k))

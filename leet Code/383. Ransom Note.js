// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



//     Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true



// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
//     ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    let rLen = ransomNote.length;
    let mLen = magazine.length;

    if (rLen > mLen) return false;


    let map = new Map();

    for (let i = 0; i < rLen; i++) {
        if (map.has(ransomNote[i])) {
            let temp = map.get(ransomNote[i]);
            temp += 1;
            map.set(ransomNote[i], temp);
        } else {
            map.set(ransomNote[i], 1);
        }
    }

    for (let i = 0; i < mLen; i++) {
        if (map.has(magazine[i])) {
            let temp = map.get(magazine[i]);
            temp -= 1;
            if (temp === 0) {
                map.delete(magazine[i])
            } else {
                map.set(magazine[i], temp);
            }
            
        }
    }

    return map.size === 0;


    // return magazine.includes(ransomNote);
};

const ransomNote = "aa", magazine = "aab"

console.log(canConstruct(ransomNote, magazine))
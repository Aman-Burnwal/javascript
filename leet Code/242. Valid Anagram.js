// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true


// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.






// solution 1
// using hasmap


// Intuition
// Since we want to prioritize time complexity over space complexity we can use a HashMap / HashTable which will take up some space but will allow us to come up with an O(n) solution.

//     Approach
// Since the inputs are strings we can use a hash to track the count of all the letters in either s or t.Once we have a count of all the letters in one of the strings we can then loop over the other string and decrement the count until we encounter a negative count for that letter or completely finish the second loop.

//     Complexity
// Time complexity: O(n)
// Space complexity: O(n)


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    
    const store = {};
    
    for (let i = 0; i < s.length; i++) {
        if (store[s[i]] > 0) {
            store[s[i]] += 1;
        } else {
            store[s[i]] = 1;
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (store[s[j]] > 0) {
            store[s[j]] -= 1;
        } 

        if (store[s[j]] < 0) {
            return false;
        }
    }

    return true;


};


let s = "anagramanagramanagramanagramanagramnagaramnagaram", t = "nagaramnagaramnagaramnagaramnagaramnagaramnagaram";

console.log(isAnagram(s, t))





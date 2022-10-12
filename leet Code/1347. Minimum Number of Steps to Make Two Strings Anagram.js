// You are given two strings of the same length s and t.In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different(or the same) ordering.



//     Example 1:

// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
//     Example 2:

// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
//     Example 3:

// Input: s = "anagram", t = "mangaar"
// Output: 0
// Explanation: "anagram" and "mangaar" are anagrams.


//     Constraints:

// 1 <= s.length <= 5 * 104
// s.length == t.length
// s and t consist of lowercase English letters only.



/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    
    const tmap = new Map();
    const smap = new Map();

    let s1 = s.split("");
    let t1 = t.split("");

    s1.map(index => {
        if (smap.has(index)) {
            let temp = smap.get(index);
            temp++;
            smap.set(index, temp)
        } else {
            smap.set(index, 1);
        }
    })


    t1.map(index => {
        if (tmap.has(index)) {
            let temp = tmap.get(index);
            temp++;
            tmap.set(index, temp);
        } else {
            tmap.set(index, 1);
        }
     
    })


    let value = 0;



    smap.forEach((key, values) => {
        
        if (tmap.has(values)) {
            

            let val = tmap.get(values)
            if (val < key) {
                value += key - val
                // console.log(value)
            }
            
            
        } else {
            value += key;
        }
    })


    return value;
};


let s ="leetcode"

let t = "practice"

console.log(minSteps(s, t))
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

//

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1("ba").

//     Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 104
//     s1 and s2 consist of lowercase English letters.


//     hint 1: Obviously, brute force will result in TLE.Think of something else.

//     hint 2: How will you check whether one string is a permutation of another string ?
//     hint 3: One way is to sort the string and then compare.But, Is there a better way ?
    
//     hint 4: If one string is a permutation of another string then they must one common metric.What is that ?
    
//     hint 5: Both strings must have same character frequencies, if one is permutation of another.Which data structure should be used to store frequencies ?
    
//     hint 6: What about hash table ? An array of size 26 ?


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    let map = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (!map.has(s1[i])) {
            map.set(s1[i], 1)
        } else {
            let temp = map.get(s1[i]);
            temp++;
            map.set(s1[i], temp)
        }
    }
    
    for (let i = 0; i < s2.length; i++) {

        let map2 = new Map(map);



        if (map.has(s2[i])) {

            let temp = i;

            while (temp < (s1.length + i)) {

                if (map2.has(s2[temp])) {

                    let temp2 = map2.get(s2[temp]);

                    if (temp2 === 1) {

                        map2.delete(s2[temp])

                    } else {

                        temp2--;
                        map2.set(s2[temp], temp2)

                    }

                } else {

                    break;
                }
                temp++;
                
            }

            if (map2.size === 0) return true;
        }
    }

    return false;
};

const s1 = "ab", s2 = "eidboaoo"

console.log(checkInclusion(s1, s2));
// Given an array of strings strs, group the anagrams together.You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let arr = [...strs];
    

    if (strs.length === 0 || strs.length === 1) return [strs]

    let op = [];
    // Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    // Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
    for (let i = 0; i < strs.length; i++) {

        op = strs[i];
        op = op.toString().split("").sort().join("")
        strs[i] = op;

    }
    op = [];
    while(strs.length !== 0) {
       
        let curr = strs[0]
        let curr1 = arr[0]
        strs.splice(0, 1);
        arr.splice(0, 1);

        let val = [];
        val.push(curr1)
        
        for (let j = 0; j < strs.length; j++) {

            if (curr == strs[j]) { 
                val.push(arr[j]);
                strs.splice(j, 1);
                arr.splice(j, 1);
                j--
            
                
            }
        }
        op.push(val)
    }

    return op;
    
};


// optimized solution
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (input) {
    let leng = input.length;

    if (leng === 0 || leng === 1) return [input];

    let obj = {};

    input.map(i => {
        let cur = i;
        let stored = i.split('').sort().join('');

        !obj[stored] ? obj[stored] = [cur] : obj[stored].push(cur);
    })

    let re = Object.values(obj);
    return re;

};


// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log(groupAnagrams(strs));


/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */


/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {

    if (strs.length === 0) return "";
    if (strs.length === 1) return (`${strs}`);
    // return console.log(strs.length);

    let final = ""
    let str = strs[0];
    // console.log(str)

    for (let i = 1; i < strs.length; i++) {

        final = ""

        let str1 = strs[i]
        // console.log(`str ${str}   and str1 is ${str1}`)


        for (let j = 0; j < str1.length; j++) {


            if (str[j] == str1[j]) {

                final += str1[j];



            } else {
                break;
            }



        }
        str = final;

    }
    return (`${final}`)


};


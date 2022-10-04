/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const brackets = "() [] {}"


    const blankarray = [];


    for (let i = 0; i < s.length; i++) {

        blankarray.push(s[i]);

        // s = "(){}()"
        // i = 0  blankarray = [(]
        // i = 1 blankarray = [()]  


        const opening_brackets = blankarray[blankarray.length - 2];

        const ending_brackets = blankarray[blankarray.length - 1];

        const complete_bracket = opening_brackets + ending_brackets;


        if (brackets.includes(complete_bracket)) {
            blankarray.pop();
            blankarray.pop();
        }


    }

    return blankarray.length === 0;

};

console.log(isValid("(){}"))







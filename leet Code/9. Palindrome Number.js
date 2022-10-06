/**
 * Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 */









/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    if (x < 10 && x >= 0) return true;

    let newX = 0;
    let temp = x;


    while (temp > 9) {

      
        newX = (newX * 10) + Math.floor(temp % 10)
        
        temp = Math.floor(temp / 10);


        if (temp <= 9) {
            newX = (newX * 10) + temp

        }
    }

    return newX === x

};

console.log(isPalindrome(9))
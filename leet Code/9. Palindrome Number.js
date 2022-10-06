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

    // if our x value is greater than 0 and smaller than 10 then it will be palindrome so i am simply returning it 
    // as true
    if (x < 10 && x >= 0) return true;

    // creating a variable to store opposite values 
    let newX = 0;
    // temp is our temorary variable where we assigned our "x" value. it will help us to get the opposite number
    let temp = x;

    // while loop is started it will give us opposite integer number
    while (temp > 9) {

        // this is storing our opposite number(remineder)
        newX = (newX * 10) + Math.floor(temp % 10)
        // this is storing our rest number whom we need to convert in opposite
        temp = Math.floor(temp / 10);

        // last step to store last reminder in newX variable;
        if (temp <= 9) {
            newX = (newX * 10) + temp

        }
    }
    
    // returns true if opposite number (newX) is equal to input number(x);
    return newX === x

};

console.log(isPalindrome(9))
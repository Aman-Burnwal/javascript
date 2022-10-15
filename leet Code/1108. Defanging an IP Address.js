/**
 * question link https://leetcode.com/problems/defanging-an-ip-address/;
 */


/**
 * 
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 

Constraints:

The given address is a valid IPv4 address.
 */



/**
 * @param {string} address
 * @return {string}
 */

// without optimization
/**
var defangIPaddr = function (address) {

    let val = ""

    for (let i = 0; i < address.length; i++) {
        
        if (address[i] == '.') {

            val += "[.]"
            continue;
        }

        val += address[i];

    }
    return val;
};

*/

// optimized solution
var defangIPaddr = function (address) {

    const result = address.split(".").join("[.]")

    return result
};
const address = "1.1.1.1";

console.log(defangIPaddr(address))
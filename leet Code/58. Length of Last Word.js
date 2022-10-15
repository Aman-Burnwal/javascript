/**
 * @param {string} s
 * @return {number}
 */

// without optimization;
/**
var lengthOfLastWord = function (s) {

    let len = s.length - 1;
    let sum = 0, shouldBreak = false;

    while (len >= 0) {
        if (s[len] !== " ") {
            
            for (len; len >= 0; len--) {

                if (s[len] != " ") {
                    sum++
                } else {

                    shouldBreak = true;

                    break;
                }
            }
        }
        len--;
        if (shouldBreak) break;
    }

    return sum;
};
*/



// with optimization


var lengthOfLastWord = function (s) {

    let len = s.length - 1;
    let sum = 0;

    while (len >= 0) {

        if (s[len] !== " ") {
            sum++;
        } else if (sum !== 0 && s[len] == " ") {
            break;
        }
        len--;


    }

    return sum;
};

const s = "Hello World"

console.log(lengthOfLastWord(s));
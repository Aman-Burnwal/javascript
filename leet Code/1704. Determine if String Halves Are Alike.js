/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {

    let vowel = "aeiouAEIOU"

    let left = 0
    let rigth = 0;


    for (let i = 0; i < s.length / 2; i++) {

        if (vowel.includes(s.charAt(i))) left++;

        if (vowel.includes(s.charAt(s.length - i - 1))) rigth++;


    }

    return left === rigth;

};
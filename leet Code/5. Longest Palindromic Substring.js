/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let slen = s.length;

    let start = 0, end = 0;


    for (let i = 0; i < slen; i++) {

        let len1 = maxPalindrome(s, i, i);
        let len2 = maxPalindrome(s, i, i + 1);

        let len = Math.max(len1, len2);

        if (len > (end - start)) {
            
            start = i - parseInt((len - 1) / 2)
            end =i + parseInt(len / 2);
        }
    }

    return s.substring(start, end + 1);


};


function maxPalindrome(s, i, j) {

    while (i >= 0 && j < s.length && s.charAt(i) == s.charAt(j)) {
        i--;
        j++;
    }

    return (j - i - 1);

}
















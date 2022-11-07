/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let len = s.length;

    let map = new Map();
    let max = 0;
    let curr = 0, i = 0

    if (len <= 1) return len;

    while( i < len) {

        if (!map.has(s[i])) {

            map.set(s[i]);
            i++;


        } else {
            map.delete(s[curr])
            curr++;
        }
        max = Math.max(max, map.size);

    }

    return max


};
console.log(lengthOfLongestSubstring("pwwkwe"))





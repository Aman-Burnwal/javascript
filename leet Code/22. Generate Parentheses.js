/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {

    let ans = []
    const go = (start, end, s) => {

        if (s.length === 2 * n) {
            ans.push(s);
            return;
        }

        if (start < n) go(start + 1, end, s + "(");
        if (end < start) go(start, end + 1, s + ")");
    }

    go(0, 0, "")

    return ans;
};

// https://embed.creately.com/cclS6u7Upy3?type=svg

console.log(generateParenthesis(3))
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {

    let stack = [];

    let error = 0;
    let max_len = 0;


    for (let i = 0; i < s.length; i++) {

        if (s[i] === "(") {
            
            stack.push(i);
        }

        else {

            if (stack.length === 0) {
                
                error = i + 1;

            } else {

                stack.pop();

                if (stack.length === 0) {
                    
                    max_len = Math.max(max_len, i - error + 1)
                } else {

                    max_len = Math.max(max_len, i - stack[stack.length - 1])
                }

            }
        }
    }
    return max_len;
};

console.log(longestValidParentheses("(()()))"))
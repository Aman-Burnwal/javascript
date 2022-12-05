/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {


    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        
        if (tokens[i] === "*") {

            let temp = (stack[stack.length - 2]) * stack[stack.length - 1]
            stack.pop();
            stack[stack.length - 1] = temp;

        } else if (tokens[i] === "/") {

            let temp = parseInt(stack[stack.length - 2] / stack[stack.length - 1])
            stack.pop();
            stack[stack.length - 1] = temp;


        } else if (tokens[i] === "+") {

            let temp = (stack[stack.length - 2]) + stack[stack.length - 1]
            stack.pop();
            stack[stack.length - 1] = temp;

        } else if (tokens[i] === "-") {

            let temp = (stack[stack.length - 2]) - stack[stack.length - 1]
            stack.pop();
            stack[stack.length - 1] = temp;
        } else {

            stack.push(Number(tokens[i]))
        }
        console.log(stack)
    }
    return stack[0];

};

console.log(evalRPN(["0", "3", "/"]))
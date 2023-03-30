// optimized solution

function isBalanced(s) {

    const bracketMap = { "(": ")", "{": "}", "[": "]" };

    const stack = [];


    for (let i = 0; i < s.length; i++) {

        if (s[i] in bracketMap) stack.push(s[i]);

        else {

            endBracket = stack.pop();

            if(bracketMap[endBracket] !== s[i]) return "NO"
        }
    }

    return !stack.length ? "YES" : "NO";
}



function isBalanced(s) {
    // Write your code here

    const stack = [];
    let validBrackets = "(){}[]"

    for (let i = 0; i < s.length; i++) {

        stack.push(s[i])



        let bracket = stack[stack.length - 2] + stack[stack.length - 1]

        if (validBrackets.includes(bracket)) {
            stack.pop();
            stack.pop();
        }


    }

    return stack.length === 0 ? "YES" : "NO"

}


console.log(isBalanced("(){}"))

// console.log(9 ^ 6 ^ 3 ^ 5 ^ 2);?\

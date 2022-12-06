/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (a) {
    let s = [];

    for (let i of a) {

        if (Number(i) || i === "0") {
            s.push(parseInt(i))
        } else {

            let l = s.pop();
            let sl = s.pop();

            switch (i) {
                case "-":
                    s.push(sl - l)
                    break;

                case "*":
                    s.push(sl * l)
                    break;

                case "+":
                    s.push(sl + l)
                    break;

                case "/":
                    s.push(parseInt(sl / l))
                    break;
            }

        }
    }

    return s[0]
};



console.log(evalRPN(["0", "3", "/"]))
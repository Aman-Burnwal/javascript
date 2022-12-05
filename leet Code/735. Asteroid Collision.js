/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];

    for (let x of asteroids) {

        if (x > 0 || stack.length === 0) {
            stack.push(x)
        } else {

            let temp = -x;


            while (stack.length) {
                if (stack[stack.length - 1] < 0) {
                    stack.push(x);
                    break;
                }

                if (stack[stack.length - 1] < temp) {
                    stack.pop()
                    if (stack.length === 0) {
                        stack.push(x);
                        break;
                    }
                } else if (stack[stack.length - 1] > temp) {
                    break;
                } else {
                    stack.pop();
                    break;
                }


            }
        }
    }
    return stack;
};

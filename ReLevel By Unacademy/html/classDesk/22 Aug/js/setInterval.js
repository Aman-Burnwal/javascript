/**
 *          setInterval allow us to run a function reapetly, after a specified time of interval
 * 
 *      syntax : - setInterval(function, delayTime, arg1, arg2... argn);
 */


function add(num1, num2) {
    console.log(`sum of num1 and num2 is ${num1 + num2}`)
}

let timerId1 = setInterval(add, 4000, 4, 5);

console.log("timer id is " +timerId1);

// clearInterval(timerId1)
/*
setInterval: allows us to run a function repeatedly, starting after the specified interval of time, then repeating continuously at that interval

Syntax of setInterval: setInterval(function|code, delayInterval, arg1, arg2, ...., argn)
*/

function add(num1, num2) {
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
}


let a = setInterval(add, 100, 4, 3);

// clearInterval(a);// this will clear the interval

setTimeout(a, 100)


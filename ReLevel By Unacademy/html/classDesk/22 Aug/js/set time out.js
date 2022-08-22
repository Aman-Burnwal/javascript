function add(num1, num2) {
    console.log(`sum of num1 and num2 is ${num1 + num2}`)
}


/**
 * setTimeout is a asynchornous in nature
 *      syntax :- setTimeout(function, time, arg1, arg2........argn);
 */
let timerId1 = setTimeout(add, 4000, 4, 5);         // async in nature 
console.log(`timer is for timerID1 is ${timerId1}`) // sync in nature



let timerId12 = setTimeout(add, 4000, 9, 5);        // async in nature
console.log(`timer is for timerID1 is ${timerId12}`)// sync in nature



clearInterval(timerId1)                            
console.log("program reached");
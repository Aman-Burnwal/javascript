// 2. Write a program to get an input (‘How are you’) and by default it should be good in the prompt text
// box.

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question("How are you ", function (answer) {
//     console.log(`oh, so your name is ${answer}`);
//     console.log("Closing the interface");
//     rl.close();
// });

let greet = prompt("How are you?", "I am Good");
console.log(greet);

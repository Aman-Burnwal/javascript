const prompt = require('prompt-sync')();

const num = parseInt(prompt("Enter your number here "));
const time = parseInt(prompt("Enter the times of multiplication "));

function multiplication(num, time){
    for(let i = 0; i <= time; i++ ){
        console.log(`the multiplication of ${num} * ${i} = ${num * i}`);
    }
}

multiplication(num, time);
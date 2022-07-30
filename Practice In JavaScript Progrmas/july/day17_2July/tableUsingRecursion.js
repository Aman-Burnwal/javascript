const prompt = require('prompt-sync')();

const num = parseInt(prompt("Enter your number here "));
const time = parseInt(prompt("Enter the times of multiplication "));

function multiplication(num, time){
    
    if(time === 0){
        return;
    }
    multiplication(num, time - 1);
    return console.log(`the multiplication of ${num} * ${time} is ${num * time}`);
    
}

multiplication(num, time);
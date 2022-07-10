// Problem Statement:
// Given two numbers, find the least possible positive integer that is divided by them.
// Example-1:
// Input 10,5
// Output 10
// Example-2:
// Input 12,16
// Output 80


let num1 = 12;
let num2 = 16;

let lcm = 1;
let devide = 2;


let great = num1 > num2 ? num1 : num2;

while(true){
    let j1 = true;
    let j2 = true;
    for(let i = devide; ;){
        if(num1 % i === 0){
            num1 = num1 / i;
            j1 = true;
        } else {
            j1 = false;
        }

        if(num2 % i === 0){
            num2 = num2 / i
            j1 = true;
        } else {
            j2 = false
        }

        if(j1 === true || j2 === true){
            lcm *= i;
        }
        if(j1 === false && j2 === false){
            break;
        }

    }
    devide += 1;
    if(devide >= great ){
        break;
    }
    
}

console.log(lcm);

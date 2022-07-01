// const prompt = require('prompt-sync')();

// const num = parseInt(prompt("Enter number here  "));
// // console.log(`your number is ${num}`);
// const hide = parseInt(prompt("Enter to uncout that digit"));
// let total = 0;
// function findnum(num, hide){
    
//     if(num === 1){
//         return 1 + total;
//     }
//     if(num != hide){
//         total += 1;
//     }

    
//     return findnum(num - 1, hide)
// }

// console.log(findnum(num, hide));




function countNumbers(n){
    if (n < 3)
        return n;
    if (n >= 3 && n < 10)
        return n - 1;
    var po = 1;
    while (parseInt(n / po) > 9)
        po = po * 10;


    var mostSigDigit = parseInt (n / po);

    if (mostSigDigit != 3)
    

        return countNumbers(mostSigDigit) * countNumbers(po - 1) + countNumbers(mostSigDigit) + countNumbers(n % po);
    else
    

        return countNumbers(mostSigDigit * po - 1);
}

var n = 230;
console.log(countNumbers(n));


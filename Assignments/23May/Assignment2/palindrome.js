// // Requirements: "Practise Problem 2 : Create a program to print all prime palindromes under 50.



// function isPalindrome(num) {
//     let length = num.length;

//     for (idx = 0; idx <= length / 2; idx++) {
//         if (num[idx] != num[length - 1 - idx]) {
//             return false;
//         }
//     }
//     return true;

// }


// for (let i = 1; i <= 50; i++) {
//     if (isPalindrome(i.toString())) {
//         console.log(i);
//     }
// }

















// Requirements: "Practise Problem 2 : Create a program to print all prime palindromes under user Input.

const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter your number here "));
// let num = 50;


function isPalindrome(num) {
    let length = num.length;
    for (let indx = 0; indx < length / 2; indx++) {
        if (num[indx] != num[length - 1 - indx]) {
            return false
        }
    }
    return true;
}

for (let i = 1; i <= num; i++) {
    if (isPalindrome(i.toString())) {
        console.log(i);
    }
}

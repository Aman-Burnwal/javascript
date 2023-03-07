// https://www.hackerrank.com/contests/mountblue-technologies/challenges/reduced-string


function superReducedString(s) {
    // Write your code here

    let arr = s.split("");
    let i = 0;
    
    while (i < arr.length) {

        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
            i = 0;
        } else {
            i++
        }
    }

    return arr.length ? arr.join("") : "Empty String"

    
}

// let a = "baab";

// test case 1
let a = "aaabccddd";



console.log(superReducedString(a))
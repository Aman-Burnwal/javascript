// https://www.hackerrank.com/contests/mountblue-technologies/challenges/the-birthday-bar


function birthday(s, d, m) {
    // Write your code here

    let total = 0;
    let pre = 0;
    let i = 0;
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {

        total += s[i];


        if (total === d) {
            count++;
            total -= s[pre];
            pre++;
            
        } else if (total > d) {
            total -= s[pre];
            pre++;

        }
        if (i - pre - 1 >= 0) {
            total -= s[pre];
            pre++;
        }
    }
    return count;

}

let s = [1, 1, 1, 1, 1];
let d = 3;
let m = 2;

console.log(birthday(s,d,m))
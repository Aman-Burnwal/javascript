// Create a pattern using ‘*’ as shown below using loops.
// *
// **
// ***
// ****
// *****

let star = "*"
let prtTimes = 5;

for(let i = 1; i <= prtTimes; i++){
    let temStar = ""
    for(let j = 1; j <= i; j++){
        temStar += star;
    }
    console.log(temStar);
}

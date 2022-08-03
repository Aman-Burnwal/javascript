// *****
// ****
// ***
// **
// *


let num = 5;
downwardTriangleStarsPatter(num);
function downwardTriangleStarsPatter(num) {
    
    for(let i = 0; i < num; i++) {
        let star = "";

        for (let j = i; j < num; j++) {
            star += "*"
        }
        console.log(star);
    }
}
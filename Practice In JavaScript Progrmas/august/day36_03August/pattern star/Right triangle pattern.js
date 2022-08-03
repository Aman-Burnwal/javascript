/**
 *     *
      **
     ***
    ****
   *****
 */


let num = 5;
rightTriangle(5);

function rightTriangle(num) {
    let space = "", star = "";

    for(let i = 1; i <= num; i++) {
        space = "" 
        star = ""
        for (let j = 0; j < i; j++) {
            star += "*"
        }

        for (let k = i; k < num; k++) {
            space += " "
        }
        console.log(space + star);
    }
}
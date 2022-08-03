// *
// **
// ***
// ****
// *****

let num = 5;

leftTriangle(5);

function leftTriangle(num) {
    

    for(let i = 0; i < num; i++) {
        let star = "", space = "";
        for(let j = 0; j <= i; j++ ) {
            star += "*";
        }

        for (let k = i; k < num; k++) {
            space += " ";
        }

        console.log(star + space);
    } 

}
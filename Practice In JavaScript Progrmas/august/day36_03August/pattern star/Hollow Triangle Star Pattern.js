// *
// **
// * *
// *  *
// *   *
// ******


let length = 10;
hollowTrinagl(length);

function hollowTrinagl (length) {

    for (let i = 0; i < length; i++) {
        let star = "*";
        let space = "";
        for (let j = 0; j < i - 1; j++) {
            if(i === length - 1) {
                star += "*"
                continue;
            }
            space += " "

        }

        if(i === 0) {
            console.log(star)
            
        } else if(i === length - 1) {
            console.log(star +"*")
        }else {
            console.log(star + space + star)
        }
    
    }
}
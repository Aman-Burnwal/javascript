//     *
//    ***
//   *****
//  *******
// *********

pyramid(5);

function pyramid(length) {

    for(let i = 0; i <= length; i++) {
        let star = "", space = " ";

        // for space
        for(let j = 0; j <= Math.floor(length / 2) - i; j++) {
            space += " ";
        }

        // for star
        for(let k = 1; k < i; k++) {
            star += "*"
        }

        console.log(space+ star +star);
    }
}
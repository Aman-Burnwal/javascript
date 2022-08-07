// 1) Write a javaScript program to print below pattern having numbers in pyramid form along with its mirror
// image


/**
 *      1 2 3 4 5 6 7
 *       2 3 4 5 6 7
 *        3 4 5 6 7
 *         4 5 6 7
 *          5 6 7
 *           6 7
 *            7
 *           6 7
 *          5 6 7
 *         4 5 6 7
 *        3 4 5 6 7
 *       2 3 4 5 6 7
 *      1 2 3 4 5 6 7
 */
pyramid(7);

function pyramid(N) {
    let space = ""
    for (let i = 1; i <= N; i++) {
        let printingPyramid = i;
        for (let j = i + 1; j <= N; j++) {
            printingPyramid += " " + j;
        }
        console.log(space + printingPyramid );
        space += " "
    }


    
    for (let i = N - 1; i >= 1; i--) {
        space = ""
        let printingPyramid = i;
        for (let j = i + 1 ; j <= N; j++) {
            printingPyramid += " " + j;
        }
        for(let k = i; k > 1 ;k--) {
            space += " "
        }
        console.log(space + printingPyramid);
        
    }


}
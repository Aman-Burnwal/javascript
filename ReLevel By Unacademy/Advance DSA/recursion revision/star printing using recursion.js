/**
 * 
 *  start = 5
 * 
 *         *
 *         * *
 *         * * *
 *         * * * *
 *         * * * * *
 */


function printingStars(n, design, pattern) {

    if (n === 0) {

        console.log(design)
        return design;
    }

    console.log(design)

    printingStars(n - 1, design+= pattern, pattern);    
    
   
}

// printingStars(12, "", "*")


function printingStar(n, star) {

    if (n === 0) return console.log(star);

    console.log(star)

    printingStar(n - 1, star += "*")
}

// printingStar(5, "")
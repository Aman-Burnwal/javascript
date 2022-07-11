// Problem - 2
// Write a program to find the square of given number from 0 to n.


function squareOfNumTimes(n) {
    for(let i = 1; i <= n; i++) {
        console.log(i, "  *  ", i, "   =  " , i * i);
    }
}

squareOfNumTimes(4);
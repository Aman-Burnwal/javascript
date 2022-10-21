let ans = ""
function printingStar(n, row, col) {

    // base case 
    if (row > n) return;

    if (col > row) {
        ans += "\n"
        col = 1;
        printingStar(n, row += 1, col)
        
    } else {
        ans += "*"
        printingStar(n, row, col+= 1)
    }

}

printingStar(5, 1, 1);

console.log(ans)
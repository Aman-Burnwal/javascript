
let ans = ""
function pattern(n, col) {
    
    if (n === 0) return;

    if (col > n) {
        ans += "\n"
        col = 1
        pattern(n -= 1, col)
    } else {
        ans += "*"
        pattern(n,  col+= 1)

    }


}

pattern(7, 1);

console.log(ans)


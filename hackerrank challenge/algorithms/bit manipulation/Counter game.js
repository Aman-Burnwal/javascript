
function counterGame(n) {
    // Write your code here
    while (n !== 1) {

        let p = Math.sqrt(n, 0.5);

        let p1 = parseInt(p);
        
        if (p === p1) n = p;
        else n = n - Math.pow(p1, 2);
        console.log(p, p1, n)

        // if (p === )
    }

    return n;
}

console.log(counterGame(132))


console.log(Math.sqrt(5, 0.5))
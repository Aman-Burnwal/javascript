
let n = 6;

function nthFibonachi(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }


    return nthFibonachi(n - 1) + nthFibonachi(n - 2)
}

console.log(nthFibonachi(n))

// 0 1 1 2 3 5 8 13 21

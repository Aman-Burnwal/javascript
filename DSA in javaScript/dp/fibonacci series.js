
function fb(n, map) {
    

    if (n <= 1) return n;
    
    if (map[n]) return map[n]
    // console.log(n);

    let a = fb(n - 1, map);
    let b = fb(n - 2, map);

    map[n] = a + b;

    return map[n];


}

// console.log(fb(11, {}));


//using array;

function fib(n, dp) {

    if (n <= 1) return n;

    if (dp[n]) return dp[n];

    let ans = fib(n - 1, dp) + fib(n - 2, dp);

    dp[n] = ans;

    return dp[n];
}

console.log(fib(11, []))



function tabularDp(n) {

    let zero = 0;
    let one = 1;

    let ans = 0;

    for (let i = 2; i <= n; i++) {

        ans = zero + one;
        zero = one;
        one = ans;
    }

    return ans;
}

console.log(tabularDp(11))
console.log(tab(11))

function tab(n) {
    let dp = [0, 1];

    for (let i = 2; i <= n; i++) dp.push(dp[dp.length - 1] + dp[dp.length - 2]);

    return dp[n]
}
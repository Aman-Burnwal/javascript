// function f(val, w, c, n, dp) {
//     if (c == 0 || n == 0) return 0;
//     if(dp[n][c] != -1) return dp[n][c]
//     if (w[n] <= c) {
//         let include = val[n] + f(val, w, c - w[n], n - 1,dp)
//         let exclude = f(val, w, c, n - 1,dp)

//          dp[n][c] = Math.max(include, exclude,dp)
//          return dp[n][c] 
//     } 

//     else {
//         dp[n][c] = f(val, w, c, n - 1);
//         return dp[n][c];
//     } 
// }




function f(val, w, c, n, dp) {
    if (c == 0 || n == 0) return 0;
    if (dp[n][c] != 0) return dp[n][c];

    if (w[n] > c) return dp[n][c] = f(val, w, c, n - 1, dp);


    else {
        let include = val[n] + f(val, w, c - w[n], n - 1, dp)
        let exclude = f(val, w, c, n - 1, dp)

        return dp[n][c] = Math.max(include, exclude)
    }
}

let val = [15, 14, 10, 45, 30];
let w = [2, 5, 1, 3, 4];
let c = 7;

let dp = Array(val.length + 1).fill().map(() => Array(c + 1).fill(0))
// console.log(dp)


let Zero1KnapSack = f(val, w, c, val.length - 1, dp);
console.log(Zero1KnapSack)
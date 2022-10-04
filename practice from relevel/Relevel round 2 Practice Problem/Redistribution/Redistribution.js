const mod = 1000000007

let currSum = 0;

function findAllPossibleSolutionCount (currSum) {
    if(currSum === n) return 1;

    if(currSum > n) return 0;

    if(dp[currSum] !== -1) {
        return dp[currSum];
    }

    let possibleSolutionCount = 0;

    for(let i = 3; i <= n; i + 2) {
        possibleSolutionCount += findAllPossibleSolutionCount(currSum + 1);
    }

    dp[currSum] = possibleSolutionCount % mod;
    return possibleSolutionCount % mod

}


var n = 890;
let dp = Array(n).fill(n - 1);
console.log(findAllPossibleSolutionCount(currSum))
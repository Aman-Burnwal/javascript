
// consider a money system consisting of n coins.
//  Each coin has a positive integer value.
// Your task is to calculate the number of distinct ordered ways you can produce a money sum x using the available coins.
const coin = [1, 5, 7]
total = 11;

// using recursion
function countWays(total, coin, n) {
    if (total == 0) {
        return 1;
    }
    if (total < 0) {
        return 0;
    }
    if (n <= 0 && total >= 1) {
        return 0;
    }
    return countWays(total, coin, n - 1) + countWays(total - coin[n - 1], coin, n)
}


console.log(countWays(total, coin, coin.length));
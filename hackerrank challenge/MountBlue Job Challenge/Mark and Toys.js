
function climbingLeaderboard(prices, k) {
    // Write your code here


    prices.sort((a, b) => a - b);

    let sum = 0;
    let i = 0;
    let count = 0;
  

    for (i = 0; i < prices.length; i++) {

        if ((sum += prices[i]) < k) count++;
            
        else return count;
     

    }

    return count;

}

console.log(climbingLeaderboard([1, 12, 5, 111, 200, 1000, 10], 50))
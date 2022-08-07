/*
Problem – 
        Given an array denoting the cost of stock on different days. Your task is to find the
        maximum profit which can be earned after buying or selling the stock on that particular day. For

example –

Input – [ 100, 180, 260, 310, 40, 535, 695 ];

Output – 865 (Buy stock on Day 0 and sell it on Day 3 and again buy on Day 4 and sell on Day 6)

Naive Approach – 
                We can iterate through the array and buy and sell stock everyday to check if we
                are getting maximum profit or not. If we get more profit, we can update our maximum profit so far.
                We can use nested loop in this case to get the desired value


Efficient Approach –Instead of using nested loops, we will use a single loop here.
STEPS -
1) Initialize maximumProfit = 0;
2) Iterate from 1 to length of array
3) Check if current stock price is greater than previous price
4) If yes, save difference of current and previous to the maximum Profit
*/

let price = [100, 180, 260, 310, 40, 535, 695];

console.log(maxProfit(price));

function maxProfit(stock) {
    let profit = 0;
    for (let i = 0; i < stock.length - 1; i++) {
        if (stock[i] < stock[i + 1]) {
            profit += stock[i + 1] - stock[i];
        }
    }
    return profit;
}


//using recursion



function maximumProfit(price, start, end) {


    if (end <= start)
        return 0;


    let profit = 0;

    for (let i = start; i < end; i++) {

        for (let j = i + 1; j <= end; j++) {


            if (price[j] > price[i]) {


                let curr_profit = price[j] - price[i]
                    + maximumProfit(price, start, i - 1)
                    + maximumProfit(price, j + 1, end);


                profit = Math.max(profit, curr_profit);
            }
        }
    }
    return profit;
}


// let price = [ 100, 180, 260, 310,
// 				40, 535, 695 ];
let n = price.length;

console.log(maximumProfit(price, 0, n - 1));
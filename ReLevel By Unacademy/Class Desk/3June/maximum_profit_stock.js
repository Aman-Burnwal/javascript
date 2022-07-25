// Maximum Profit Stock
// Problem – Given an array denoting the cost of stock on different days. Your task is to find the
// maximum profit which can be earned after buying or selling the stock on that particular day. For
// example –
// Input – {100, 180, 260, 310, 40, 535, 695}
// Output – 865 (Buy stock on Day 0 and sell it on Day 3 and again buy on Day 4 and sell on Day 6)


// Naive Approach – We can iterate through the array and buy and sell stock everyday to check if
// we are getting maximum profit or not. If we get more profit, we can update our maximum profit so
// far.
// We can use nested loop in this case to get the desired value

function maxProfit(price, start, end) {
	if (end <= start)
		return 0;

	let profit = 0;

	for (let i = start; i < end; i++) {
		for (let j = i + 1; j <= end; j++) {


			if (price[j] > price[i]) {

				let curr_profit = price[j] - price[i]
					+ maxProfit(price, start, i - 1)
					+ maxProfit(price, j + 1, end);

				profit = Math.max(profit, curr_profit);
			}
		}
	}
	return profit;
}






function maxProfit(prices) {
	let maxProfit = 0;

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
			maxProfit = maxProfit + (prices[i] - prices[i - 1]);
		}
	}

	return maxProfit;
}

let price1 = [100, 180, 260, 310, 40, 535, 695];
console.log(maxProfit(price1))


let price = [100, 280, 360, 410, 50, 535, 695];
let n = price.length;

console.log(maxProfit(price, 0, n - 1));
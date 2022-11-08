/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let buy = prices[0];
    let ind = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
            ind = i;
        }

    }

    let sell = buy;


    for (i = ind ; i < prices.length; i++) {
        if (prices[i] > sell) {
            sell = prices[i]
        }
        console.log(i)
    }

    return sell - buy


};

console.log(maxProfit([2, 4, 1]))
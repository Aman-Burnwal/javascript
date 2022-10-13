// You are given an integer total indicating the amount of money you have.You are also given two integers cost1 and cost2 indicating the price of a pen and pencil respectively.You can spend part or all of your money to buy multiple quantities(or none) of each kind of writing utensil.

// Return the number of distinct ways you can buy some number of pens and pencils.



//     Example 1:

// Input: total = 20, cost1 = 10, cost2 = 5
// Output: 9
// Explanation: The price of a pen is 10 and the price of a pencil is 5.
//     - If you buy 0 pens, you can buy 0, 1, 2, 3, or 4 pencils.
// - If you buy 1 pen, you can buy 0, 1, or 2 pencils.
// - If you buy 2 pens, you cannot buy any pencils.
// The total number of ways to buy pens and pencils is 5 + 3 + 1 = 9.
// Example 2:

// Input: total = 5, cost1 = 10, cost2 = 10
// Output: 1
// Explanation: The price of both pens and pencils are 10, which cost more than total, so you cannot buy any writing utensils.Therefore, there is only 1 way: buy 0 pens and 0 pencils.


//     Constraints:

// 1 <= total, cost1, cost2 <= 106


/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {

    // defqult count 
    let count = 0;

    // assuming that there will be no pencils (0) + money / pens price
    // geetting the maximum pen combinations;
    const penCombos = Math.floor(total / cost1) + 1;
    // console.log(penCombos);

    // this loop will be run till pecCombinations
    for (let i = 0; i < penCombos; i++) {

        // suppose current i = 0;

        // suppose current i = 1;

        // suppose current i = 2;
        const totalAfterPens = total - (i * cost1);
        // totaalAfterPens = 20 - (0 * 10);
        // totalAfterPens = 20;
        // console.log(totalAfterPens)


        // totalAfterPens = 20 - (1 * 10);
        // totalAfterPens = 10;


        // totalAfterPens = 20 - (2 * 10);
        // totalAfterPens = 0;
        count += Math.floor(totalAfterPens / cost2) + 1;
        // count += (20 / 5) + 1 = 5;

        // count += (10 / 5) + 1 = 5 + 3 = 8;

        // count += (0 / 5) + 1 = 8 + 1 = 9;

        console.log(count)
    }
    return count;
};
const total = 20, cost1 = 10, cost2 = 5

console.log(waysToBuyPensPencils(total, cost1, cost2))
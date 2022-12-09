
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {

    let total_gas = 0;
    let total_cost = 0;

    // finding the total gas in given gas
    for (g of gas) total_gas += g;

    for (c of cost) total_cost += c;

    if (total_cost > total_gas) return -1;


    // finding the starting point;

    let start = 0;
    let current_gas = 0;

    for (let i = 0; i < gas.length; i++) {

        current_gas += (gas[i] - cost[i]);

        if (current_gas < 0) {
            current_gas = 0;
            start = i + 1;
        }
    }
    return start;
};
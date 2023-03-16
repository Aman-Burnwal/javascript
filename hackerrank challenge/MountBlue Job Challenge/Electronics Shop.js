function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */

    let  max = -1;

    for (let i = 0; i < keyboards.length; i++) {

        for (let j = 0; j < drives.length; j++) {

            let sum = keyboards[i] + drives[j];

            if (sum > max && sum <= b) max = sum;
        }
    }

    return max;

}


function getMoneySpent(keyboards, drives, b) {
    keyboards.sort((a, b) => b - a);
    drives.sort((a, b) => b - a);

    let max = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let sum = keyboards[i] + drives[j];

            if (sum > b) {
                // The sum is too large, so break out of the inner loop
                break;
            }

            if (sum > max) {
                max = sum;
            }
        }

        if (keyboards[i] > b) {
            // The keyboard price is too large, so break out of the outer loop
            break;
        }
    }

    return max;
}

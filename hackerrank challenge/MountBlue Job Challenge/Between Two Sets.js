// https://www.hackerrank.com/contests/mountblue-technologies/challenges/between-two-sets



function getTotalX(a, b) {
    // Write your code here

    let count = 0;

    let max = Math.max(...a);
    let min = Math.min(...b);

    for (let i = max; i <= min; i++) {

        let flag = true;

        for (let j = 0; j < a.length; j++) {

            if (i % a[j] !== 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            for (let k = 0; k < b.length; k++) {

                if (b[k] % i !== 0) {
                    flag = false;
                    break;
                }
            }
        }

        if (flag) {
            count++;
        }

    }

    return count;


}
// https://www.hackerrank.com/contests/mountblue-technologies/challenges/sock-merchant

function sockMerchant(n, ar) {
    // Write your code here

    let pairs = 0;


    if (n <= 1) return 0;

    let map = new Map();

    for (let i = 0; i < n; i++) {

        if (map.has(ar[i])) {
            map.delete(ar[i]);
            pairs++;
        } else {
            map.set(ar[i]);
        }
    }
    return pairs;

}


let n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]


console.log(sockMerchant(n, ar));
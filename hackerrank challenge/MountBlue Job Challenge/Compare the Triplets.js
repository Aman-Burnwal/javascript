// https://www.hackerrank.com/contests/mountblue-technologies/challenges/compare-the-triplets


function compareTriplets(a, b) {

    let alice = 0;
    let bob = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }

    return [alice, bob];

}


console.log(compareTriplets([17, 28, 30], [99, 16, 8]))
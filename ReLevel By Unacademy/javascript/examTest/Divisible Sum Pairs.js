function divisibleSumPairs(n, k, arr) {
    // Write your code here
    let count = 0;
    arr.sort()

    for (let i = 0; i < n - 1; i++) {

        for (let j = i + 1; j < n; j++) {

            if ((arr[i] + arr[j]) % k === 0) count++
        }
    }
    return count;

}
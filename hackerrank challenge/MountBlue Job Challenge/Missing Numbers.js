function missingNumbers(arr, brr) {

    const freq1 = new Array(10001).fill(0);
    const freq2 = new Array(10001).fill(0);
    const result = [];

    for (const num of arr) {
        freq1[num]++;
    }

    for (const num of brr) {
        freq2[num]++;
    }


    for (let i = 1; i <= 10000; i++) {
        if (freq2[i] > freq1[i]) {
            result.push(i);
        }
    }

    return result;
}

arr = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14]
brr = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12]

console.log(missingNumbers(arr, brr))
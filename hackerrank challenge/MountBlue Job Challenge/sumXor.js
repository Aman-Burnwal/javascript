function sumXor(n) {
    let count = 0;
    if (n === 0) return 1;

    // Count number of zeros in binary representation of n
    let binaryStr = n.toString(2);
    let numZeros = 0;
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr.charAt(i) === '0') {
            numZeros++;
        }
    }

    // Calculate number of combinations that result in sum equal to xor
    count = BigInt(1) << BigInt(numZeros);

    return count;
}

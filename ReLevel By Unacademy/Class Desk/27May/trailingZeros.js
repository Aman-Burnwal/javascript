function trainlingZeros(num) {
    let sumofzeros = 0;
    for(let i = 5; Math.floor(num / i) >= 1; i *= 5) {
        sumofzeros += Math.floor(num / i);
    }
    return sumofzeros;
}

console.log(trainlingZeros(11));
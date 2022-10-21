function sum(num) {
    if (num === 0) return 0;

    return sum(Math.floor(num / 10)) + num % 10;
}

const num = 1234;

console.log(sum(num, 0))
const add = (a, b) => a + b;
const minus = (a, b) => a - b; 
const mul = (a, b) => a * b;

const result = mul(2, add(4, minus(4, 2)))
console.log(result);

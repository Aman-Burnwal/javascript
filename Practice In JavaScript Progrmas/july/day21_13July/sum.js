function sum (num1, num2) {
    while(num2 != 0) {
        let carry = num1 & num2
        num1 = num1 ^ num2;

        num2 = carry << 1;
    }
    return num1;
    
}

console.log(sum(3,5));
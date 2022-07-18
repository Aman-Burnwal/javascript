// Requirements: "2.) Given 3 numbers. You need to find the smallest of three numbers without using comparison
// operators
// Input -> 12,44,2
// Output -> 2"

function minimum(num1, num2, num3) {
    let a = num1 , b = num2, c = num3;
    while(num1 != 0 || num2 != 0 || num3 != 0) {
        if(num1 === 0) {
            return a;
        } else if (num2 === 0) {
            return b;
        } else if (num3 === 0) {
            return c;
        }
        num1--, num2--, num3--;
    }
}


console.log(minimum(21,30,4));

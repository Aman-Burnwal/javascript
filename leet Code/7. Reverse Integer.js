/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {


    let result = 0;
    let sign = x < 0 ? -1 : 1;

    x = Math.abs(x);

    while (x >= 10) {
        
        result = result * 10 + x % 10;
        x = parseInt(x / 10);

        if (x < 10) {
            result = result * 10 + x;
        }
    }

    result = result * sign;

    if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
        return 0;
    }

    return result;
    
    

};

console.log(reverse(1534236469))
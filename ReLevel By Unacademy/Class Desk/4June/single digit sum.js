/*

Single Digit Sum

Problem – Given a number N. You need to find the sum of digits of N until we get a single digit sum. For example –
Input – 12345
Output – 15 (1+2+3+4+5)
Approach – We can traverse through the sum until the sum value is less than or equal to 9. We can use Loops to
iterate through the sum. Here we will use while loop for iteration
Steps -
1) Initialize sum = 0;
2) Verify if sum is less than 9 or n > 0 in loop condition
3) Fetch last digit of n and add to the sum
4) Remove last digit of n
5) Repeat step 2 till condition 

*/

let num = 281020;

function totalSum(num) {
    let sum = 0;

    if(num < 10) {
        return num;
    }

    while(true) {
        if(num < 10) {
            sum += num;
            break;
        }
        sum += num % 10;

        num = Math.floor(num / 10)

    }
    return sum
}

console.log(totalSum(num));


// https://www.hackerrank.com/contests/mountblue-technologies/challenges/simple-array-sum/problem
function simpleArraySum(ar) {
    // Write your code here

    let sum = 0;

    ar.forEach(element => {
        sum += element
    });

    return sum;

}


console.log(simpleArraySum([1, 3, 4]))
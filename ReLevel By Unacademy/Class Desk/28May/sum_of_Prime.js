/* Sum of Prime
Problem Statement:
Given a number A which is an even integer, you need to print two prime numbers whose sum will be
equal to A.
Constraint: A>2
Input - 4
Output - 2,2
Explanation:
For the range of values from 2 to A, start iterating the numbers from both the ends. Example if A is 8
then the range will be 2, 3, 4, 5, 6, 7
Since we need to find pair, Select the number `i` and `A-i`.
Check if both are prime or not. If both are prime then log the output and return.
We will iterate in the range till the middle range so as to keep position `i` <= `A-i` as comparison above.
That will just be a repetitive task.

Lets understand this by taking the above range as example:
Range = 2,3,4,5,6,7
A= 8
Let the pair be p1 and p2
Iteration-1
p1 = 2 & p2 = 6
2 is prime but 6 is not therefore continue
Iteration-2
p1 = 3 & p2 = 5
Both 3 and 5 are prime, hence log there output and return.
And to check prime, we are simply trying to find a factor of the number starting from 2 to square root
of it. If there exists a factor, then the number is not prime.
*/


class FunctionApp{
    constructor(num){
        this.num = num;
    }

    isPrime(n) {
        if(n === 0 || n === 1) {
            return false;
        }
        for(let i = 2; i < n; i++) {
            if(n % i === 0) {
                return false;
            } 
        }
        return true;
    }

    sumOfPrime() {
        for(let i = 2; i <= Math.floor(this.num / 2); i++) {
            if(this.isPrime(i) === true && this.isPrime(this.num - i)) {
                console.log(`the sum of prime num is ${i}  ${this.num - i}` );
                return;
            }
        }
        console.log("NOt found");
    }
}

let FunctionApp1 = new FunctionApp(15);

FunctionApp1.sumOfPrime();

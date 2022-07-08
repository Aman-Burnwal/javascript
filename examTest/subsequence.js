// Love for Subsequences
// love for subsequences



// Problem Statement



// Antonio is a famous person known for his Love for subsequences. He has a sequence A of length N. He wants to find a subsequence whose Love value is maximum.

// The Love value for a subsequence is calculated according to the rules below:-

// ● If the sum of elements of the subsequence is odd then his Love value for the subsequence is zero.

// For example:- for the given array {3,1,2,4,5} if we choose the subsequence {3,2,4} and the sum is 9 which is odd so love value for this subsequence {3,2,4} is 0.

// ● If the sum of elements of the subsequence is even then his Love value for the subsequence is equal to the sum of elements of the subsequence.



// For example:- for the given array {3,1,2,4,5} if we choose the subsequence {3,2,5} and the sum is 10 which is even so love value for this subsequence {3,2,5} is 10.

// Your task is to find a subsequence whose Love value is maximum.



// Note:-

// ● A subsequence is a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements.

// ● For empty subsequences, the Love value is zero.



// Constraint



// • 1 <= N <= 105

// • -105 <= A[i] <= 105

// • All input values are integers.



// Input Format



// • First-line contains an integer N, the length of the sequence. • Second line contains N space-separated integers denoting the array A(the sequence).



// Output Format



// • In the first line print love value for the subsequence whose love value is maximum.



// Sample Input 1



// 5

// 7 3 2 8 1



// Sample Output 1



// 20



// Explanation of Sample 1



// For test case1 subsequence whose love value is maximum -> {7,3,2,8} and it's love value is 20



// Things to Note for the Candidate: You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.

// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.

// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output.

// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement (Right Click and Open in New Tab to view.)


// not completed
let length = 5;
let array = [2, 3, 4, 5, 1, 2]
let low = array[0]
for (let i = 0; i < array.length; i++) {
    if (array[i] < low) {
        low = array[i]
    }

}
console.log(low);

let a = array.findIndex([4]);


function subsequenceOfLove(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];

    }
    if (sum % 2 === 0) {
        return console.log(sum);
    } else {
        // if(array)
        let low = array[0]
        for (let i = 0; i < array.length; i++) {
            if (array[i] < low) {
                low = array[i]
            }

        }
    }


    array.pop();
    return subsequenceOfLove(array);

}
subsequenceOfLove(array);
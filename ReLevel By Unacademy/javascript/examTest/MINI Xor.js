// Mini Xor

// MINI XOR

// Problem Statement

// Amy has an array A consisting of N integers.She wants to find the number of pairs(X, Y) such that 1 <= X < Y <= N and AX ^ AY <= MIN(AX, AY).

//     Here ^ denotes BITWISE XOR and MIN(X, Y) returns the minimum of X and Y.

// Help her to find the answer.

// You are given T independent test cases.

//     Constraints

// 1 <= T <= 10
// 1 <= N <= 105
// 1 <= Ai <= 109
//     All input values are integers.

// Input Format

// First - line contains T.
//     First line of each test case consists of a single integer N.
//     Second line of each test case consists of N space separated integers denoting the array A.

// Output Format

// Print in a newline for each test case a single integer denoting the number of required pairs.

// Sample Input 1

// 1

// 4

// 2 7 1 5

// Sample Output 1

// 1

// Explanation of Sample 1

// There is only one required pair = (2, 4)

// A2 ^ A4 = 7 ^ 5 = 2 and MIN(AX, AY) = 5

function miniXOR(arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {
            let MIN = Math.min(arr[i], arr[j]);
         
            let c = arr[i] ^ arr[j]

            if ( c <= MIN) count++;
           
        }
    }
    return count;
}

console.log(miniXOR([2, 7, 1, 5], 4))
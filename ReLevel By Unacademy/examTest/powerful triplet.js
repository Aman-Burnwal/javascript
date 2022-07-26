// POWERFUL TRIPLET

// Problem Statement
// Amy has an array A, of N integers. For a triplet (X, Y, Z) (1<=X<Y<Z<=N), she defines its power as: | AX – AY | * AZ.
// She wants to find the maximum possible power that a triplet can have. Since, she is busy, she asked you to help her.
// You are given T independent test cases.

// Constraints
// 1 <= T <= 10
// 3 <= N <= 105
// 1 <= Ai <= 109
// All input values are integers.

// Input Format
// First-line contains T.
// First line of each test case consists of a single integer N.
// Second line of each test case consists of N space separated integers denoting the array A.

// Output Format
// Print in a newline for each test case a single integer denoting maximum possible power that a triplet can have.

// Sample Input 1
// 1
// 4
// 1 2 4 3
// Sample Output 1
// 9



// Explanation of Sample 1



// If she choses the triplet (1, 3, 4), then power = | A1 – A3 | * A4 = | 1 – 4 | * 3 = 9

let a = [4,2,3,4,1]
let r = a.length,m;
// console.log(m, r)
if(r % 2 != 0)
{
  m = r/2
  console.log(m)
  console.log(a[m])
}

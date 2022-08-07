// Subarray AND
// Question Name: Subarray AND



// Problem Statement



// Consider an array A consisting of N positive integers.

// An array B is a subarray of an array A if B can be obtained 
// from A by deletion of several (possibly, zero, or all) elements from the beginning 
// and several (possibly, zero, or all) elements from the end. In particular, 
// an array is a subarray of itself.

// A nice array is an array satisfying the below condition :

// Bitwise AND of any two elements of the array must be zero.
// More formally for any two integers i and j, 
// Bitwise AND of the ith and jth elements of the array must be zero.
// Given array A, print the largest possible length of a nice subarray of array A.



// Input Format



// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.


// Output Format



// Print the largest possible length of a nice subarray of array A.


// Constraints



// 1<=N<=2*105
// 0 <= Ai< 220


// Sample Input 1



// 5

// 6 2 4 1 7



// Sample Output 1



// 3



// Explanation of Sample 1



// A possible way to choose a 3 length nice subarray is : A2..4 = [2,4,1]

// Here 2 AND 4 = 0, 2 AND 1 = 0, 4 AND 1 = 0, hence it is a nice subarray.



//
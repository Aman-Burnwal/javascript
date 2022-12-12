/**
 * Question Name: Smallest Array

Problem Statement

You are given an integer X. You have to print the smallest array such that

    the sum of all the elements of this array = X 
    the maximum element of the array is at most 104.
    All elements of the array are distinct.

Array A is called smaller than array B if :

    Length of A is less than length of B.
    Else if 
    length of A = length of B, then the first element where array A and B differ should be smaller in array A.

Input Format

    First line contains a single integer denoting X.

Output Format

    Print the smallest array which satisfies the given conditions. If there are no possible array print “-1”.

Constraints

    1<=X<=10^9

Sample Input 1

10098

Sample Output 1

98 10000

Explanation of Sample 1

Sum of array elements = 98 + 10000 = 10098.

Also it can be proved that this is the smallest possible array.
 */


function smallestArray(x) {

    let arr = [];

    let i = 1;

    while (x > 0) {

        if (x - i > 0) {

            arr.push(i);

            x -= i;

            i++;

        } else {

            arr.push(x);

            x = 0;

        }

    }

    return arr;

}


console.log(smallestArray(10098));
// Problem Statement

// There are N balls arranged in a row.The ith ball is colored with the color Ci.

// Antonio does not like this arrangement of balls as there are too many different colors in it.

// Hence he decided to perform the below operation on the arrangement exactly once such that the final arrangement has a minimum number of distinct colored balls:

//     Select two balls of the same color and repaint all the balls in between them with the color of the chosen balls.
//     More formally select two indices 1 <= i < j <= N such that Ci = Cj and then make all Ck = Ci for all i <= k <= j.

// Given array C(denoting the initial coloring of the balls), print the minimum number of distinct colored balls Antonio can get in the final arrangement by performing the given operation exactly once.

// Input Format

//     First line contains a single integer denoting N.
//     Next line contains N space separated integers denoting the elements of array C.

// Output Format

//     Print the minimum number of distinct colored balls Antonio can get in the final arrangement by performing the given operation exactly once.

//     Constraints

// 1 <= N <= 105
// 1 <= Ci <= N

// Sample Input 1

// 7

// 1 2 4 5 5 2 4

// Sample Output 1

// 3

// Explanation of Sample 1

// Antonio can perform the operation as :

//     Select i = 2, j = 6. Final color of the balls become = [1 2 2 2 2 2 4].

// Now the final arrangement has 3 distinct color balls(1, 2 and 4).


// Function candidate has to implement
function repaint(c, n) {
    let ans = 0;
    let found = false;
    for (let i = 0; i < n / 2; i++) {

        if (c[i] === c[n - i - 1]) {
            found = true;
            break;
        }
        ans += 2;
    }
    if (found) ans += 1;
    return ans;

}


//Driver Code
var n = readline();
var temp = readline().trim();
var s = temp.split(" ");
for (i = 0; i < n; i++) {
    s[i] = Number(s[i]);
}
var num = repaint(s, n);
print(num);
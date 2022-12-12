
/**
 * 
 * @param {*} arr 
 * @param {*} n 
 * @param {*} m 
 * @returns 
 * 
 * 
 * 
 * Problem Statement

 

Alex has an integer array A, of size N.

 

Each element in the array represents the color of balloons Alex has. 
(Same integer representing same color balloon, while different integer representing a different color balloon).

 

Now, Alex needs to select M consecutive balloons, such that he gets the maximum number of distinct color balloons.

 

 

Input Format

    First line contains two integers representing N, and M respectively.
    Second line contains integers representing array A.

 

Output Format

    Output the maximum number of distinct balloons Alex can select.

 

 

Constraints

    1<=M<=N<=3*10^5
    1<=A[i]<=10^9

 

 

Sample Input 1

5 3

3 1 1 2 3

 

Sample Output 1

3

 

 

﻿Explanation of Sample 1

Alex can select balloons from index 3rd till index 5th (Assuming one-based indexing).

Hence he gets 3 distinct colors, which is maximum.
 */


















// Function candidate has to implement
function moreTheMerrier(arr, n, m) {

    if (n === 0) return 0;

    let ans = [];
    let max = 0;
    let i = 0;



    while (i < n) {



        let temp = arr[i]

        if (!ans.includes(temp) || temp === m) {
            i++
            ans.push(temp)

        } else {

            ans.shift();

        }

        max = Math.max(max, ans.length);


    }
    return max
}


//Driver Code
var temp1 = readline().trim();
var temp2 = temp1.split(" ");
var n = Number(temp2[0]);
var m = Number(temp2[1]);
var temp = readline().trim();
var s = temp.split(" ");
for (i = 0; i < n; i++) {
    s[i] = Number(s[i]);
}
var num = moreTheMerrier(s, n, m);
print(num);


console.log(moreTheMerrier([3, 1, 1, 2, 3, 3, 3], 7, 3))
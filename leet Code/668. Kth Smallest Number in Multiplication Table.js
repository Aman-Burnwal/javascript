// Nearly everyone has used the Multiplication Table.
// The multiplication table of size m x n is 
// an integer matrix mat where mat[i][j] == i * j(1 - indexed).

// Given three integers m, n, and k,
// return the kth smallest element in the m x n multiplication table.



//     Example 1:

// Input: m = 3, n = 3, k = 5
// Output: 3
// Explanation: The 5th smallest number is 3.

// Example 2:

// Input: m = 2, n = 3, k = 6
// Output: 6
// Explanation: The 6th smallest number is 6.



// Constraints:

// 1 <= m, n <= 3 * 104
// 1 <= k <= m * n


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {


    let left = 1;
    let right = m * n;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        let count = 0;

        for (let i = 1; i <= m; i++) {

            count += Math.min(Math.floor(mid / i), n);
            console.log(mid, count, n);
        }
        console.log("")
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
    
};


console.log(findKthNumber(4, 8, 6));
/**
 * An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

 

Example 1:


Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
Output: true
Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
Hence, we return true.
Example 2:


Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
Output: false
Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
Hence, we return false.
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 100
1 <= matrix[i][j] <= n
 */
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {

    let num = matrix.length;
    let set = new Set();

    for (let i = 1; i <= num; i++) {
        set.add(i);
    }
    // console.log(set);


    for (let i = 0; i < matrix.length; i++) {

        let temp = new Set(set);
        let temp2 = new Set(set);
        // console.log(temp);


        for (let j = 0; j < matrix[i].length; j++) {

            if (temp.has(matrix[i][j]) && temp2.has(matrix[j][i])) {
                temp.delete(matrix[i][j]);
                temp2.delete(matrix[j][i])
            } else {
                return false;
            }
        }
        if (temp.size > 0 || temp2.size > 0) {
            return false;
        }
    }


    return true;
};

matrix = [[1, 2, 3], [3, 1, 2], [2, 3, 1]];

console.log(checkValid(matrix))
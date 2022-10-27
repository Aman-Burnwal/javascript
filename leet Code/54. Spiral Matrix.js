// Given an m x n matrix, return all elements of the matrix in spiral order.



//     Example 1:


// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Example 2:


// Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
           [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]


// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
//     - 100 <= matrix[i][j] <= 100


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (arr) {
    let first_row = 0, last_row = arr.length - 1;
    let first_col = 0, last_col = arr[0].length - 1
    const newArr = [];

    while (first_row <= last_row && first_col <= last_col) {

        let i;
        // left to right printing
        for (i = first_col; i <= last_col; i++) {
            newArr.push(arr[first_row][i]);

        }
        // console.log("one")
        first_row++;

        // top to bottom printing
        for (i = first_row; i <= last_row; i++) {
            newArr.push(arr[i][last_col]);
        }
        last_col--;
        // console.log("two")

        // bottom right to left printing
        if (first_row <= last_row) {
            for (i = last_col; i >= first_col; i--) {
                newArr.push(arr[last_row][i]);

            }
            // console.log("three")
        }

        last_row--


        // bottom to top printing
        if (first_col <= last_col) {
            for (i = last_row; i >= first_row; i--) {
                newArr.push(arr[i][first_col]);
            }
            // console.log("four")
        }

        first_col++;

    }
    return newArr;
};
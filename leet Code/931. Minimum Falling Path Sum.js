/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    
    const len = matrix.length;
    for (let i = 1; i < len; i++) {
        
        for (let j = 0; j < len; j++) {
            matrix[i][j] = matrix[i][j] + Math.min(
                matrix[i - 1][j - 1] === undefined ? Infinity : matrix[i - 1][j - 1],
                matrix[i - 1][j] === undefined ? Infinity : matrix[i - 1][j],
                matrix[i - 1][j + 1] === undefined ? Infinity : matrix[i - 1][j + 1]
            );
        }
    }
    console.log(matrix[len - 1])
    return Math.min(...matrix[len - 1]);
};


const matrix = [
    [100, -42, -46, -41],
    [31, 97, 10, -10],
    [-58, -51, 82, 89],
    [51, 81, 69, -51]
];

// 82 - 51 = 3
// 38 = 

console.log(minFallingPathSum(matrix));